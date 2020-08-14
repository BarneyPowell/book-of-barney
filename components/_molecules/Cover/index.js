
const styles = {
    name: {
        fontSize: '1.8em',
        textTransform: 'none'
    },
    cover: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        color: 'white'
    },
    heading: {
        fontSize: '1.4em',
        lineHeight: '1.2'
    }
};




export default function Cover({children, backgroundImage, backgroundImageLow}) {

    styles.cover.backgroundImage = `url(${backgroundImage})`;

    return (
        <section
            className="flex justify-center align-middle items-center"
            style={styles.cover}>

            <h1
                className="text-center uppercase font-light"
                style={styles.heading}
            >
                Hello! My name is
                    <span
                        className="block font-normal font-display"
                        style={styles.name}>Barney</span>
            </h1>

            {children}
        </section>
    );
}