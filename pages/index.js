import orderBy from 'lodash/orderBy';
import take from 'lodash/take';

import Layout from '@/molecules/Layout';
import Seo from '@/molecules/Seo';
import Cover from '@/molecules/Cover';
import loadPostContent from "../utils/posts/loadPostContent";
import getPosts from '../utils/posts/getPosts';
import fieldImageSrc from 'content/assets/images/field.jpg';
import fieldImageLowSrc from 'content/assets/images/field.jpg?lqip';
import ArticleCardList from '@/molecules/ArticleCardList';

const MAX_POSTS = 6;

export default function Home({ posts }) {
    return (
      <Layout template='home'>
        <Seo title='Barney Powell' />
        <Cover
          backgroundImage={fieldImageSrc}
          backgroundImageLow={fieldImageLowSrc}
          />

        <section className="font-display py-10 px-8 flex justify-evenly flex-col md:flex-row  items-center flex-wrap">
          <p className="text-center text-xl font-light uppercase mb-4 md:text-3xl lg:text-4xl lg:my-12 lg:w-full flex-shrink-0 md:flex-shrink">
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

        <section className="px-4">
          <ArticleCardList articles={posts} />
        </section>
      </Layout>
    );
  }

export async function getStaticProps() {
    const posts = take(orderBy(getPosts(), ['date'], ['desc']), MAX_POSTS)
      .map((post) => loadPostContent(post.filename));
    return {
      props: {
        posts,
      },
    };
  }