import getPosts from './getPosts';
import loadPostContent from './loadPostContent';

export default function getAllTags() {
    const posts = getPosts();

    const filenames = posts.map((postFile) => {
        return postFile.filename;
    });

    const tags = [];

    for (let x = 0; x < filenames.length; x++) {
        const content = loadPostContent(filenames[x]);
        for (let y = 0; y < content.frontmatter.tags.length; y++) {
            const tag = content.frontmatter.tags[y];
            if (!tags.find((currentTag) => currentTag.slug === tag.slug)) {
                tags.push(tag);
            }
        }
    }

    return tags;
}