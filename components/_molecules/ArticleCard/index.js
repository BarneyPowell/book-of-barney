import Link from "next/link";

export default function ArticleCard({ frontmatter: { title, description, date }, slug }) {
    return (
        <article className="m-2 bg-white font-display">
              <header>
                <h3 className="px-2 m-0 ">
                  <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                    <a className="text-2xl text-orange-500 no-underline">
                      {title}
                    </a>
                  </Link>
                </h3>
                <div className="px-2 text-xs flex">
                  <span className="mx-1 text-gray-600">{date}</span>
                  <span className="mx-1 uppercase bg-orange-500 text-gray-100 rounded px-1">1,000 Words</span>
                </div>
              </header>
              <section className="px-2 pb-1">
                <p className="m-0 text-sm">{description}</p>
              </section>
            </article>
    );
}