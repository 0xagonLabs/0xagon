import { AppConfig } from '../../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Delivered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500 z-50;
        }
        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
