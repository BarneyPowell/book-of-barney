import React from "react";

import Layout from '@/molecules/Layout';
import Markdown from '@/molecules/Markdown';
import Seo from '@/molecules/Seo';
import SimpleTagList from '@/molecules/SimpleTagList';

import getPostFromSlug from '../../utils/posts/getPostFromSlug';
import getPosts from '../../utils/posts/getPosts';
import loadPostContent from "../../utils/posts/loadPostContent";


export default function Blog({ content, frontmatter }) {

  const styles = {
    article: {
      boxShadow: '0 0 1vw rgba(0,0,0,0.05)'
    }
  };

  return (
    <Layout template='article'>
        <Seo title={`${frontmatter.title} | Barney Powell`} />
        <article style={styles.article} className="md:mb-10 max-w-3xl w-screen">
          <header className="text-center bg-white font-display mb-px">
            <h1 className="text-3xl py-6">{frontmatter.title}</h1>
          </header>
          <section className="bg-white mb-px text-center p-2 text-xs font-display">
            <ul className="flex justify-center items-center">
              <li>{frontmatter.date.full}</li>
              <li className='mx-1'>&middot;</li>
              <li><SimpleTagList tags={frontmatter.tags} /></li>
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