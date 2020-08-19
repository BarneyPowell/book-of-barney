import Link from 'next/link';
import ParsedDate from '@/atoms/ParsedDate';

export default function ArticleCard({ frontmatter: { title, description, date }, slug }) {

    const dateProps = {
      date,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return (
        <article className="m-2 bg-white font-display">
              <header>
                <h3 className="p-4 pb-0 ">
                  <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                    <a className="text-2xl text-orange-500 no-underline">
                      {title}
                    </a>
                  </Link>
                </h3>
                <div className="px-4 mb-1 text-xs flex">
                  <span className="text-gray-600"><ParsedDate {...dateProps} /></span>
                </div>
              </header>
              <section className="p-4 pt-0">
                <p className="m-0 text-sm">{description}</p>
              </section>
            </article>
    );
}