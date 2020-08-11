import React from "react";
import fs from "fs";
import getPostFilename from '../../utils/getPostFilename';
import loadPostContent from "../../utils/loadPostContent";
import Layout from '../layout';
import ReactMarkdown from "react-markdown/with-html";

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
 <ReactMarkdown escapeHtml={false} source={content} />
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