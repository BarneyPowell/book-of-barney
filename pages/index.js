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