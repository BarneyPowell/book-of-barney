import { formatDistance } from 'date-fns';
import Link from 'next/link';

const getDistanceDate = (dateString) => {
  const time = Date.parse(dateString);
  const parsedDate = new Date();
  parsedDate.setTime(time);
  return formatDistance(parsedDate, new Date(), { addSuffix: true });
}

export default function ArticleCard({ frontmatter: { title, description, date }, slug }) {

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
                  <span className="text-gray-600">{getDistanceDate(date)}</span>
                </div>
              </header>
              <section className="p-4 pt-0">
                <p className="m-0 text-sm">{description}</p>
              </section>
            </article>
    );
}