import Link from "next/link";
import TwitterSvg from '@/atoms/SvgIcon/TwitterSvg';
import ImdbSvg from '@/atoms/SvgIcon/ImdbSvg';
import InstagramSvg from '@/atoms/SvgIcon/InstagramSvg';
import LinkedInSvg from '@/atoms/SvgIcon/LinkedInSvg';

export default function Footer({ children }) {

    const styles = {
        footer: {
          boxShadow: '0 0 10vw rgba(0,0,0,0.3), inset 0 2px 8px rgba(0,0,0,1)'
        }
      };

    return (
        <footer style={styles.footer} className="bg-gray-800 text-gray-200 text-center p-4 footer">

            <nav className="footer__nav flex justify-center">
              <a title="My LinkedIn profile" aria-label="My LinkedIn profile" className="w-6 m-4" href="https://www.linkedin.com/in/barnspowell/" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
              <a title="My Twitter feed" aria-label="My Twitter feed" className="w-8 m-4" href="https://twitter.com/BrnyPwll" target="_blank" rel="noopener noreferrer"><TwitterSvg /></a>
              <a title="My Instagram profile" aria-label="My Instagram profile" className="w-8 m-4" href="https://www.instagram.com/barneyp/" target="_blank" rel="noopener noreferrer"><InstagramSvg /></a>
              <a title="My IMdB entry" aria-label="My IMdB entry" className="w-8 m-4" href="https://www.imdb.com/name/nm6402749/" target="_blank" rel="noopener noreferrer"><ImdbSvg /></a>
            </nav>

            &copy; 2020 Barney Powell
            {children}

            <style jsx>{`
              .footer__nav a {
                display: block;
                fill: white;
              }

            `}</style>

        </footer>
    );
}