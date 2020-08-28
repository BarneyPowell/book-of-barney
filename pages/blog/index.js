import React from "react";
import orderBy from 'lodash/orderBy';

import loadPostContent from "@/utils/posts/loadPostContent";
import getPosts from '@/utils/posts/getPosts';

import ArticleList from '@/molecules/ArticleList';
import Layout from '@/molecules/Layout';
import Seo from '@/molecules/Seo';

export default function Posts({ posts }) {

  return (
    <Layout template='article'>
        <Seo title={`Posts | Barney Powell`} />
        <section className="p-4">
          <h1 className="font-display  text-3xl text-center">Posts</h1>
          <p>
            My blog posts tend to fall into two broad categories: creative writing and thoughts on software engineering. There may well be a few posts on other subjects which are more esoteric
            but generally I post about things that I find useful, or at least might find useful later on.
          </p>
        </section>

        <ArticleList articles={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = orderBy(getPosts(), ['date'], ['desc'])
    .map((post) => loadPostContent(post.filename));
  return {
    props: {
      posts,
    },
  };
}