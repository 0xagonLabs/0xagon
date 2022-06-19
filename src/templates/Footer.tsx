import Link from 'next/link';

import { Background } from '../components/background/Background';
import { CenteredFooter } from '../components/footer/CenteredFooter';
import { Section } from '../components/layout/Section';

const Footer = () => (
  <Background color="bg-gray-100 dark:bg-gray-800">
    <Section>
      <CenteredFooter
        iconList={
          <>
            <Link href="https://medium.com/@0xagonlabs">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
                </svg>
              </a>
            </Link>
            <Link href="https://twitter.com/0xagonlabs">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </Link>
          </>
        }
      ></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
