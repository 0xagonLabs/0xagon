pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; 

contract test is ERC721Enumerable, Ownable {

  mapping(string => uint256) private courseToId;
  mapping(address => uint256) private studentToCourses;

  constructor() ERC721("test", "test") {
  }

  function doThings (address _student, string memory _courseName) external payable {

    require(courseToId[_courseName] != 0,"This course doesn't exist");

    studentToCourses[_student] = studentToCourses[_student] + courseToId[_courseName];
    
  }

  function getSomething() public view returns (string[]) {
    
    
  }

}
