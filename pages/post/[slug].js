import React, { useState } from "react";
import getPostFromSlug from '../../utils/posts/getPostFromSlug';
import getPosts from '../../utils/posts/getPosts';

import loadPostContent from "../../utils/posts/loadPostContent";
import Layout from '../../components/_molecules/Layout';
import Seo from '../../components/_molecules/Seo';
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// const CodeBlock = ({ language, value }) => {
//   return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
// };

const Image = ({ alt, src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const styles = {
    lqip: {
      filter: "blur(10px)",
    },
  };

  // Hide preview when image has loaded.
  if (imageLoaded) {
    styles.lqip.opacity = 0;
  }

  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 z-10 w-full transition-opacity duration-500 ease-in opacity-100"
        src={require(`../../content/assets/${src}?lqip`)}
        alt={alt}
        style={styles.lqip}
      />

      <img
        className="w-full"
        src={require(`../../content/assets/${src}`)}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};


export default function Post({ content, frontmatter }) {
  return (
    <Layout>
        <Seo />
              <header>
          <h1 className="my-0">{frontmatter.title}</h1>
          <p className="text-xs">{frontmatter.date}</p>
        </header>
        <div className="prose">
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{ image: Image }}
        />
        </div>
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