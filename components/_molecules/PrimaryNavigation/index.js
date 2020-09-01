import Link from "next/link";

export default function PrimaryNavigation() {
    return (
        <nav>
                        <ul>
                <li>
                    <Link href={"/"} as={`/`}>
                        <a title="Back to homepage">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"} as={`/blog`}>
                        <a title="Blog posts">Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}