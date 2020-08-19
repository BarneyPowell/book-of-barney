import Layout from '../components/_molecules/Layout';
import Seo from '../components/_molecules/Seo';
import Cover from '../components/_molecules/Cover';
import loadPostContent from "../utils/posts/loadPostContent";
import getPosts from '../utils/posts/getPosts';
import fieldImageSrc from 'content/assets/images/field.jpg';
import fieldImageLowSrc from 'content/assets/images/field.jpg?lqip';
import ArticleList from '@/molecules/ArticleList';


export default function Home({ posts }) {
    return (
      <Layout>
        <Seo />
        <Cover
          backgroundImage={fieldImageSrc}
          backgroundImageLow={fieldImageLowSrc}
          />

        <section className="font-display py-10 px-8 flex justify-evenly flex-col md:flex-row  items-center flex-wrap">
          <p className="text-center text-xl font-light uppercase mb-4 md:text-3xl lg:text-4xl lg:my-12 lg:w-full flex-shrink-0">
            I'm an <span className="font-normal">Engineering Manager</span> with a speciality in leading Front-end engineering teams.
          </p>
          <p className="text-center  mb-4 text-sm text-gray-700 md:text-xl lg:m-3 lg:w-1/3  flex-shrink">
            I'm passionate about working with people to help them be the
            best version of themselves, bring them together in exceptional teams
            and work with them to create something greater than the sum of its parts.
          </p>
          <p className="text-center mb-4 text-sm text-gray-700  md:text-xl lg:m-3  lg:w-1/3 flex-shrink">
           I'm also
            a fairly poor writer, a fairly good director of theatre, a competent 1st AD in film and the jury
            is still out when it comes to how I'm doing as a father. My sons will let you know in 10-15 years.
          </p>
        </section>

        <ArticleList articles={posts} />

      </Layout>
    );
  }

export async function getStaticProps() {
    const posts = getPosts().map((post) => loadPostContent(post.filename));
    return {
      props: {
        posts,
      },
    };
  }