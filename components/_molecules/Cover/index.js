
const styles = {
    name: {
        fontSize: '2.5em'
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
        lineHeight: '1.1',
        fontSize: '3.5vh'
    }
};




export default function Cover({children, backgroundImage, backgroundImageLow}) {

    styles.cover.backgroundImage = `url(${backgroundImage})`;

    return (
        <section
            className="flex justify-center align-middle items-center"
            style={styles.cover}>

            <h1
                className="text-center font-light font-display"
                style={styles.heading}
            >
                Hello! My name is
                    <span
                        className="block"
                        style={styles.name}>Barney</span>
            </h1>

            {children}
        </section>
    );
}