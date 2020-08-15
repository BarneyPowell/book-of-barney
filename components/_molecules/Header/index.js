import Link from "next/link";

export default function Header({ children, onMenuClick }) {

    const styles = {
        parent: {
            zIndex: 1
        },
        header: {
            zIndex: 2
        }
    };


    return (
        <header
            style={styles.parent}
            className="fixed top-0 left-0 w-screen text-white">

            <div style={styles.header} className="flex w-full justify-between p-2 relative">

                <Link href={"/"} as={`/`}>
                    <a className="uppercase font-body"
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