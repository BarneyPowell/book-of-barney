import TwitterSvg from '@/atoms/SvgIcon/TwitterSvg';
import ImdbSvg from '@/atoms/SvgIcon/ImdbSvg';
import InstagramSvg from '@/atoms/SvgIcon/InstagramSvg';
import LinkedInSvg from '@/atoms/SvgIcon/LinkedInSvg';

let styles = {
    name: {
        fontSize: '2.5em'
    },
    cover: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '90vh',
        width: '100vw',
        display: 'flex',
        color: 'white'
    },
    heading: {
        lineHeight: '1.1',
        fontSize: '3.5vh'
    }
};




export default function Cover({children, backgroundImage, backgroundImageLow}) {

    styles = { ...styles,
        cover: {
            ...styles.cover,
            backgroundImage: `url(${backgroundImage})`
        }
    };

    return (
        <section
            className="flex justify-end align-middle items-center max-h-16-9 flex-col"
            style={styles.cover}>
            <span className="flex items-center flex-auto">
            <h1
                className="text-center font-light font-display"
                style={styles.heading}
            >
                Hello! My name is
                    <span
                        className="block"
                        style={styles.name}>Barney.</span>
            </h1>
            </span>
            <nav className="cover__nav flex justify-center flex-grow-0">
              <a title="My LinkedIn profile" aria-label="My LinkedIn profile" className="w-6 m-4" href="https://www.linkedin.com/in/barnspowell/" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
              <a title="My Twitter feed" aria-label="My Twitter feed" className="w-8 m-4" href="https://twitter.com/BrnyPwll" target="_blank" rel="noopener noreferrer"><TwitterSvg /></a>
              <a title="My Instagram profile" aria-label="My Instagram profile" className="w-8 m-4" href="https://www.instagram.com/barneyp/" target="_blank" rel="noopener noreferrer"><InstagramSvg /></a>
              <a title="My IMdB entry" aria-label="My IMdB entry" className="w-8 m-4" href="https://www.imdb.com/name/nm6402749/" target="_blank" rel="noopener noreferrer"><ImdbSvg /></a>
            </nav>

            {children}

            <style jsx>{`
              .cover__nav a {
                fill: white;
              }

            `}</style>
        </section>
    );
}