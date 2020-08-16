import Link from "next/link";

export default function Header({ children, onMenuClick }) {

    const styles = {
        parent: {
            zIndex: 1
        },
        header: {
            zIndex: 2,
            backdropFilter: 'brightness(3) blur(2px)',
            WebkitBackdropFilter: 'brightness(3) blur(2px)'
        }
    };


    return (
        <header
            style={styles.parent}
            className="fixed top-0 left-0 w-screen">

            <div style={styles.header}
                className="flex w-full justify-between p-2 px-4 relative text-gray-900 font-display">

                <Link href={"/"} as={`/`}>
                    <a className="uppercase font-extrabold"
                        title="Back to homepage">
                            Barney Powell
                    </a>
                </Link>

                <button onClick={onMenuClick} className="">
                    Menu
                </button>

            </div>

            {children}

        </header>
    );
}