import Link from "next/link";

export default function Footer({ children }) {

    const styles = {
        footer: {
          boxShadow: '0 0 10vw rgba(0,0,0,0.3), inset 0 2px 8px rgba(0,0,0,1)'
        }
      };

    return (
        <footer style={styles.footer} className="bg-gray-800 text-gray-200 text-center p-4">

            &copy; 2020 Barney Powell
            {children}

        </footer>
    );
}