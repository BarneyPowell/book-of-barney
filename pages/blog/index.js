import React from "react";
import orderBy from 'lodash/orderBy';

import loadPostContent from "@/utils/posts/loadPostContent";
import getPosts from '@/utils/posts/getPosts';
import getAllTags from '@/utils/posts/getAllTags';

import ArticleList from '@/molecules/ArticleList';
import SimpleTagList from '@/molecules/SimpleTagList';

import Layout from '@/molecules/Layout';
import Seo from '@/molecules/Seo';

export default function Posts({ posts, tags }) {

  return (
    <Layout template='article'>
        <Seo title={`Posts | Barney Powell`} />
        <article className="md:mb-10 max-w-3xl w-screen">
        <header className="p-4 bg-white">
          <h1 className="font-display  text-3xl text-center mb-2">Posts</h1>
          <p>
            My blog posts tend to fall into two broad categories: creative writing and thoughts on software engineering. There may well be a few posts on other subjects which are more esoteric
            but generally I post about things that I find useful, or at least might find useful later on.
          </p>
        </header>

        <section className="p-4">
          <h2 className="font-display text-xl border-b mb-2 text-gray-800">Tags</h2>
          <SimpleTagList tags={tags} />
        </section>

        <section className="p-4">
          <ArticleList articles={posts} />
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = orderBy(getPosts(), ['date'], ['desc'])
    .map((post) => loadPostContent(post.filename));

  const tags = getAllTags();

  return {
    props: {
      posts,
      tags
    },
  };
}