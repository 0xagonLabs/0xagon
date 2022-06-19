import { ReactNode } from 'react';

type IRecentMintedProps = {
  color: string;
  children: ReactNode;
};

const RecentMinted = (props: IRecentMintedProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 flex pt-20 pb-28">
      <div className="spine"></div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Recently Minted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NFT1</td>
          </tr>
          <tr>
            <td>NFT2</td>
          </tr>
          <tr>
            <td>NFT3</td>
          </tr>
        </tbody>
      </table>
      {props.children}
      <style jsx>
        {`
          .spine {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: red;
          }
        `}
      </style>
    </div>
  );
};

export { RecentMinted };
