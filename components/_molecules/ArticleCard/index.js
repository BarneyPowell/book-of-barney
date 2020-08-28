import Link from 'next/link';


export default function ArticleCard({ frontmatter: { title, description, date }, slug }) {

    return (
        <article className="mb-4 bg-white font-display rounded">
              <header>
                <h3 className="p-4 pb-0 ">
                  <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                    <a className="text-2xl text-orange-500 no-underline">
                      {title}
                    </a>
                  </Link>
                </h3>
                <div className="px-4 mb-1 text-xs flex">
                  <span className="text-gray-600">{date.distance}</span>
                </div>
              </header>
              <section className="p-4 pt-0">
                <p className="m-0 text-sm">{description}</p>
              </section>
            </article>
    );
}