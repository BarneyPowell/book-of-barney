import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const backgroundImagePath = 'content/assets/images/field.jpg';



export default function Section({children, backgroundImage, backgroundImageLow}) {


    const styles = {
        backgroundImage: `url(${backgroundImageLow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        width: '100vw'
      };

    return (
        <section style={styles}>
            {children}
        </section>
    );
}