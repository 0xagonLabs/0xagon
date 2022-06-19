//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2; // required to accept structs as function parameters

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Men is ERC721URIStorage, EIP712, AccessControl, Ownable {
  // signature related
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
  string private constant SIGNING_DOMAIN = "genericD0M41N";
  string private constant SIGNATURE_VERSION = "77";

  // ambient variables
  bool public saleIsActive = false;
  string public linkTree = "";
  uint256 immutable public MAXMEN = 10000;
  uint256 immutable public FREEMEN = 1000;
  uint256 immutable public MENPRICE = 0.01 ether; //0.01 ETH 0.080000000000000000 (18 casas)

  // The honorable first thousand minters
  mapping (address => uint8) private freeMenHallOfHonor;
  
  // more stuff
  Counters.Counter private tokenIds;
  using SafeMath for uint256;
  using Counters for Counters.Counter;

  /// @notice Trigger event for every mint that happens in the contract
  event Mint(
    address indexed _mintedTo,
    uint256 indexed _tokenId,
    uint256 _MintedAtBlockNumber
  );

  /// @notice The constructor 
  constructor(address payable minter)
    ERC721("Men", "MEN") 
    EIP712(SIGNING_DOMAIN, SIGNATURE_VERSION) {
      _setupRole(MINTER_ROLE, minter);
    }

  /// @notice Represents an un-minted NFT, which has not yet been recorded into the blockchain. A signed voucher can be redeemed for a real NFT using the redeem function.
  struct NFTVoucher {
    /// @notice The metadata URI to associate with this token.
    string uri;
    /// @notice the EIP-712 signature of all other fields in the NFTVoucher struct. For a voucher to be valid, it must be signed by an account with the MINTER_ROLE.
    bytes signature;
  }

  /// @notice Purchase a NFT to the specified address.
  /// @param redeemer The address of the account which will receive the NFT upon success.
  /// @param voucher A signed NFTVoucher that describes the NFT to be redeemed.
  function redeem(address redeemer, NFTVoucher calldata voucher) public payable returns (uint256) {
    // make sure signature is valid and get the address of the signer
    address signer = _verify(voucher);
    // make sure that the signer is authorized to mint NFTs
    require(hasRole(MINTER_ROLE, signer), "Signature invalid or unauthorized");
    // make sure the event is on
    require(saleIsActive, "Men is loading");
    // current supply, starts at 0
    uint256 totalSupply = tokenIds.current();
    // check max supply
    require(totalSupply < MAXMEN, "Available to trade at OpenSea and Pixel Garden");
  
    if(totalSupply >= FREEMEN) { // Paid Men
      // make sure that the redeemer is paying enough to cover the buyer's cost
      require(msg.value >= MENPRICE, "Insufficient funds to redeem");
    } else { // Free Men
      // make sure that only one men is being claimed per address
      require(freeMenHallOfHonor[msg.sender] != 1, "You already claimed yours");
      // set sender as a receiver
      freeMenHallOfHonor[msg.sender] = 1;
    }

    // increase Token supply and mint using the uri from voucher in case the signature is valid
    tokenIds.increment();
    uint256 tokenIdToBe = tokenIds.current();
    _safeMint(signer, tokenIdToBe);
    _setTokenURI(tokenIdToBe, voucher.uri);
    // since the contract owner is calling the minting function, it must transfer to the redeemer after purchase
    _transfer(signer, redeemer, tokenIdToBe);
    // return tokenId and emit event
    emit Mint(redeemer, tokenIdToBe, block.number);
    return tokenIdToBe;
  }

  /// @notice Send ETH from one account to another.
  /// @param _to The address of the recipient.
  /// @param _value The amount of ETH to send.
  function sendViaCall(address payable _to, uint256 _value) internal {
    // Call returns a boolean value indicating success or failure.
    (bool sent, ) = _to.call{value: _value}("");
    require(sent, "Failed to send Ether");
  }

  // Withdraw Ether
  function withdraw() public onlyOwner {
    uint balance = address(this).balance;
    sendViaCall(payable(msg.sender), balance);
  }

  // Receive Ether and emit events
  event Received(address, uint);
  receive() external payable {
    emit Received(msg.sender, msg.value);
  }
  fallback() external payable {
    emit Received(msg.sender, msg.value);
  }

  /// @notice Returns a hash of the given NFTVoucher, prepared using EIP712 typed data hashing rules.
  /// @param voucher An NFTVoucher to hash.
  function _hash(NFTVoucher calldata voucher) internal view returns (bytes32) {
    return _hashTypedDataV4(keccak256(abi.encode(
      keccak256("NFTVoucher(string uri)"),
      keccak256(bytes(voucher.uri))
    )));
  }

  /// @notice Returns the chain id of the current blockchain.
  /// @dev This is used to workaround an issue with ganache returning different values from the on-chain chainid() function and
  ///  the eth_chainId RPC method. See https://github.com/protocol/nft-website/issues/121 for context.
  function getChainID() external view returns (uint256) {
    uint256 id;
    assembly {
      id := chainid()
    }
    return id;
  }

  /// @notice Verifies the signature for a given NFTVoucher, returning the address of the signer.
  /// @dev Will revert if the signature is invalid. Does not verify that the signer is authorized to mint NFTs.
  /// @param voucher  An NFTVoucher describing an unminted NFT.
  function _verify(NFTVoucher calldata voucher) internal view returns (address) {
    bytes32 digest = _hash(voucher);
    return ECDSA.recover(digest, voucher.signature);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override (AccessControl, ERC721) returns (bool) {
    return ERC721.supportsInterface(interfaceId) || AccessControl.supportsInterface(interfaceId);
  }

  function triggerSale() public onlyOwner {
    saleIsActive = !saleIsActive;
  }

  function getLinkTree() public view returns (string memory) {
    return linkTree;
  }

  function setLinkTree(string memory _linkTree) public onlyOwner{
    linkTree = _linkTree;
  }
}