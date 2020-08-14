import Link from "next/link";

export default function Header({ onMenuClick }) {

    const styles = {
        zIndex: '1'
    };

    return (
        <header
            style={styles}
            className="fixed top-0 left-0 w-screen text-white p-2 flex justify-between">

            <Link href={"/"} as={`/`}>
                <a className="uppercase font-body"
                    title="Back to homepage">
                        Barney Powell
                </a>
            </Link>

            <button onClick={onMenuClick} className="">
                Menu
            </button>

        </header>
    );
}