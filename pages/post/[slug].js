import React from "react";
import getPostFromSlug from '../../utils/posts/getPostFromSlug';
import getPosts from '../../utils/posts/getPosts';

import loadPostContent from "../../utils/posts/loadPostContent";
import Layout from '../../components/_molecules/Layout';
import Seo from '../../components/_molecules/Seo';

import Markdown from '@/molecules/Markdown';
import ParsedDate from '@/atoms/ParsedDate';

export default function Post({ content, frontmatter }) {

  const dateProps = {
    date: frontmatter.date,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const styles = {
    article: {
      boxShadow: '0 0 10vw rgba(0,0,0,0.3)'
    }
  };

  return (
    <Layout>
        <Seo />
        <article style={styles.article} className="pt-10 md:mb-10 max-w-3xl w-screen">
          <header className="text-center bg-white font-display mb-px">
            <h1 className="text-3xl py-6">{frontmatter.title}</h1>
          </header>
          <section className="bg-white mb-px text-center p-2 text-xs font-display">
            <ul>
              <li><ParsedDate {...dateProps} /></li>
            </ul>
          </section>
          <section className="p-4 bg-white prose max-w-none mb-px">
            <Markdown>{content}</Markdown>
          </section>
        </article>
    </Layout>
  );
}

export async function getStaticPaths() {

  const posts = getPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {

    const post = getPostFromSlug(slug);
    const props = loadPostContent(post.filename);

  return {
    props
  };
}