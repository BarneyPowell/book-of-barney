import fs from "fs";
import Layout from './layout';
import Link from "next/link";
import loadPostContent from "../utils/loadPostContent";


export default function Home({ posts }) {
    return (
      <Layout>
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
    const files = fs.readdirSync(`${process.cwd()}/content/posts`);

    const posts = files.map(loadPostContent);

    // const posts = files.map((filename) => {
    //   const markdownWithMetadata = fs
    //     .readFileSync(`content/posts/${filename}`)
    //     .toString();

    //   const { data } = matter(markdownWithMetadata);

    //   // Convert post date to format: Month day, Year



    // });


    return {
      props: {
        posts,
      },
    };
  }