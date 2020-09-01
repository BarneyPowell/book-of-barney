import fs from "fs";

const getPosts = () => {

    // Need to get a list of all the files
    // then parse the filename looking for the slug.
    const files = fs.readdirSync(`${process.cwd()}/content/posts`);

    const posts = files.map((filename) => {
        const date = filename.slice(0, 10);
        const slug = filename.slice(11, filename.length - 3);
        return {
            date,
            slug,
            filename
        }
    });

    return posts;
};

export default getPosts;