import fs from "fs";
import matter from "gray-matter";
import getCustomDate from '@/utils/helpers/getCustomDate';
import getSafeTagSlug from '@/utils/helpers/getSafeTagSlug';

const loadPostContent = (filename) => {

    //TOOD Add validation on filename

    const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

    const { data, content } = matter(markdownWithMetadata);

    // split the filename to get the date.
    const dateString = filename.slice(0, 10);
    const slug = filename.slice(11, filename.length - 3);

    const date = getCustomDate(dateString);

    const tags = data.tags.split(',').map((tag) => {
        return {
            name: tag,
            slug: getSafeTagSlug(tag)
        }
    });

    const frontmatter = {
        title: data.title,
        description: data.description,
        extract: data.extract,
        tags,
        date,
    };

    return {
        slug,
        frontmatter,
        content
    };

};

export default loadPostContent;