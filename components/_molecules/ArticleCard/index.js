import Link from 'next/link';
import SimpleTagList from '@/molecules/SimpleTagList';
import LinkButton from '@/molecules/LinkButton';

export default function ArticleCard({ showExtract = true, showDescription = true, showFooter = true, frontmatter: { title, description, extract, date, tags }, slug }) {

    const primaryTag = tags[0];

    const articleHref = '/blog/[slug]';
    const articleUrl = `/blog/${slug}`;

    return (
        <article className="mb-4 pb-3 bg-white font-display rounded">
              <header className="p-4 pb-0 leading-6">
                <h3 className="p-0 leading-6">
                  <Link href={articleHref} as={articleUrl}>
                    <a className="text-2xl text-orange-500 no-underline">
                      {title}
                    </a>
                  </Link>
                </h3>
                <div className="text-xs flex text-gray-600">
                  <span className=''>
                    <Link href='/blog/tags/[tag]' as={`/blog/tags/${primaryTag.slug}`}>
                      <a>{primaryTag.name}</a>
                    </Link>
                  </span>
                  <span className='mx-1'>&middot;</span>
                  <span className="">{date.distance}</span>
                </div>
              </header>
              {showDescription && (
                <section className="p-4 py-0 pb-3">
                  <p className="m-0 text-sm font-semibold">{description}</p>
                </section>
              )}
              {showExtract && (
                <section className="p-4 py-0 pb-3">
                  <p className="m-0 text-sm mb-2">{extract}</p>
                  <LinkButton href={articleHref} as={articleUrl}>Read more</LinkButton>
                </section>
              )}
              {showFooter && (
              <footer className="m-4 my-0 pt-3 border-t">
                <SimpleTagList tags={tags} />
              </footer>
              )}
            </article>
    );
}