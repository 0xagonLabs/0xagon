import { useMetaMask } from 'metamask-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { status, connect } = useMetaMask();
  const { theme, setTheme } = useTheme();
  console.log(status);

  return (
    <nav className="flex flex-wrap justify-between items-center h-15">
      <div>
        <Link href="/" passHref>
          {theme === 'dark' ? (
            <Image
              src="/BusinessLogoWhite.png"
              alt="Business Logo"
              width={42}
              height={42}
            />
          ) : (
            <Image
              src="/BusinessLogo.png"
              alt="Business Logo"
              width={42}
              height={42}
            />
          )}
        </Link>
      </div>

      <div className="right flex items-center">
        <button
          className="mouse-hover navbar flex h-6 items-center font-editundo font-medium text-xl text-gray-800 mr-8 dark:text-gray-200"
          onClick={connect}
        >
          {/* TODO: if dont have a wallet (unavailable) goto to metamask site download */}
          {/* {(status === 'initializing' || status === 'notConnected') &&
            'Connect Wallet'} */}
          {status === 'connected' ? 'Connected' : 'Connect Wallet'}
        </button>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-20 w-20 flex items-center justify-center"
        >
          {theme !== 'dark' ? (
            <div className={`sunButton mouse-hover`}>
              <Image src="/sun.png" alt="Sun" width="52" height="52" />
            </div>
          ) : (
            <div className="moonButton">
              <Image src="/moon.png" alt="Moon" width="42" height="42" />
            </div>
          )}
        </button>
      </div>

      <style jsx>
        {`
          .mouse-hover:hover {
            z-index: 20;
            cursor: url('/mouse3.png'), auto;
          }

          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }

          .right {
            display: flex;
            flex-direction: row;
          }

          .moonButton {
            height: 46px;
            width: 46px;
          }

          .sunButton {
            height: 52px;
            width: 52px;
          }
          .sunButton:hover {
            will-change: transform;
            animation: sunDo 0.5s infinite;
          }

          @keyframes sunDo {
            0% {
              transform: scale(1, 1);
            }
            50% {
              transform: scale(1, 1);
            }
            51% {
              transform: scale(-1, 1);
            }
            100% {
              transform: scale(-1, 1);
            }
          }
        `}
      </style>
    </nav>
  );
};

export { Navbar };
