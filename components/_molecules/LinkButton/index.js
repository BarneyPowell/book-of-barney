import Link from 'next/link';

export default function LinkButton({children, href, as}) {
    return (
        <Link href={href} as={as}>
            <a className="text-orange-600 rounded-md py-1 p-3 bg-gray-200 text-sm">
                {children}
            </a>
        </Link>
    )
}