import fs from "fs";
import matter from "gray-matter";

const loadPostContent = (filename) => {

    //TOOD Add validation on filename

    const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

    const { data, content } = matter(markdownWithMetadata);

    // split the filename to get the date.
    const date = filename.slice(0, 10);
    const slug = filename.slice(11, filename.length - 3);

    //const options = { year: "numeric", month: "long", day: "numeric" };
    //const formattedDate = data.date.toLocaleDateString("en-GB", options);

    const frontmatter = {
        ...data,
        date,
    };

    return {
        slug,
        frontmatter,
        content
    };

};

export default loadPostContent;