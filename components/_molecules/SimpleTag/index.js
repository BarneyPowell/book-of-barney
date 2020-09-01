import Link from 'next/link';

export default function SimpleTag({tag}) {

    return (
        <Link href='/blog/tags/[tag]' as={`/blog/tags/${tag.slug}`}>
            <a className='bg-orange-200 mr-1 px-1 text-orange-700 text-xs font-display rounded'>{tag.name}</a>
        </Link>
    )
}