import Layout from '../components/_molecules/Layout';
import Seo from '../components/_molecules/Seo';
import Cover from '../components/_molecules/Cover';
import Link from "next/link";
import loadPostContent from "../utils/posts/loadPostContent";
import getPosts from '../utils/posts/getPosts';
import fieldImageSrc from 'content/assets/images/field.jpg';
import fieldImageLowSrc from 'content/assets/images/field.jpg?lqip';


export default function Home({ posts }) {
    return (
      <Layout>
        <Seo />
        <Cover
          backgroundImage={fieldImageSrc}
          backgroundImageLow={fieldImageLowSrc}
          />

        <img src={fieldImageSrc} />


        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className="mb-2">
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <a className="text-3xl font-semibold text-orange-600 no-underline">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="mb-4 text-xs">{date}</span>
            </header>
            <section>
              <p className="mb-8">{description}</p>
            </section>
          </article>
        ))}
      </Layout>
    );
  }

export async function getStaticProps() {
    const posts = getPosts().map((post) => loadPostContent(post.filename));
    // const posts = files.map(loadPostContent);

    return {
      props: {
        posts,
      },
    };
  }