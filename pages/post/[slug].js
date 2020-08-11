import React, { useState } from "react";
import fs from "fs";
import getPostFilename from '../../utils/getPostFilename';
import loadPostContent from "../../utils/loadPostContent";
import Layout from '../layout';
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

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
              <header>
          <h1 className="my-0">{frontmatter.title}</h1>
          <p className="text-xs">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{ code: CodeBlock, image: Image }}
        />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.slice(11, filename.length - 3),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {

    const filename = getPostFilename(`${slug}`);
    const props = loadPostContent(filename);

  return {
    props
  };
}