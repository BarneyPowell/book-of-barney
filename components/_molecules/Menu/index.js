import PrimaryNavigation from '@/molecules/PrimaryNavigation';
import TwitterSvg from '@/atoms/SvgIcon/TwitterSvg';
import ImdbSvg from '@/atoms/SvgIcon/ImdbSvg';
import InstagramSvg from '@/atoms/SvgIcon/InstagramSvg';
import LinkedInSvg from '@/atoms/SvgIcon/LinkedInSvg';

export default function Menu({ isDisplayed }) {

    const styles = {
        right: '-50vw',
        transition: 'right 0.5s ease-in-out',
        backdropFilter: 'brightness(2) blur(10px)',
        WebkitBackdropFilter: 'brightness(2) blur(10px)',
    };

    if (isDisplayed) {
        styles.right = 0;
    }

    return (
        <div
            style={styles}
            className="fixed overflow-hidden w-1/2 max-w-xs top-0 h-screen py-10">
            <PrimaryNavigation />

            <nav className="menu__nav flex justify-around m-2">
              <a title="My LinkedIn profile" aria-label="My LinkedIn profile" className="w-6" href="https://www.linkedin.com/in/barnspowell/" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
              <a title="My Twitter feed" aria-label="My Twitter feed" className="w-8" href="https://twitter.com/BrnyPwll" target="_blank" rel="noopener noreferrer"><TwitterSvg /></a>
              <a title="My Instagram profile" aria-label="My Instagram profile" className="w-8" href="https://www.instagram.com/barneyp/" target="_blank" rel="noopener noreferrer"><InstagramSvg /></a>
              <a title="My IMdB entry" aria-label="My IMdB entry" className="w-8" href="https://www.imdb.com/name/nm6402749/" target="_blank" rel="noopener noreferrer"><ImdbSvg /></a>
            </nav>
        </div>
    )
}