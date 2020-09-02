import React from "react";
import orderBy from 'lodash/orderBy';


import Layout from '@/molecules/Layout';
import Seo from '@/molecules/Seo';
import ArticleList from '@/molecules/ArticleList';

import getAllTags from '@/utils/posts/getAllTags';
import getAllPostsWithContent from '@/utils/posts/getAllPostsWithContent';

export default function Tags({ tag, posts }) {

  return (
    <Layout template='article'>
        <Seo title={`${tag.name} | Barney Powell`} />
        <article className="md:mb-10 max-w-3xl w-screen">
          <header className="text-center bg-white font-display mb-px">
            <h1 className="text-3xl py-6">{tag.name}</h1>
          </header>
          <section className="p-4 max-w-none">
            <ArticleList
                articles={posts}
                showCardDescription={false}
                showCardExtract={false}
                showCardFooter={false} />
          </section>
        </article>
    </Layout>
  );
}

export async function getStaticPaths() {

    const tags = getAllTags();


  const paths = tags.map((tag) => {
    return {
    params: {
          tags: tag.slug
    }}
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tags } }) {

    const allTags = getAllTags();
    const tag = allTags.find((tag) => tag.slug === tags);

    // Need to get all the posts with a particlular tag.
    const allPosts = getAllPostsWithContent();
    const posts = allPosts.filter(({frontmatter}) => frontmatter.tags.find((tag) => tag.slug === tags));
    const orderedPosts = orderBy(posts, ['frontmatter.date.string'], ['desc'])
    // const post = getPostFromSlug(slug);
    // const props = loadPostContent(post.filename);

  return {
    props: {
        tag,
        posts: orderedPosts
    }
  };
}