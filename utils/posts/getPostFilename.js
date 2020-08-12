import fs from "fs";
import matter from "gray-matter";

const getPostFilename = (slug) => {

    // Need to get a list of all the files
    // then parse the filename looking for the slug.
    const files = fs.readdirSync(`${process.cwd()}/content/posts`);

    let foundFilename = '';
    for (let x = 0; x < files.length; x ++) {
        const filename = files[x];
        const foundslug = filename.slice(11, filename.length - 3);

        if (slug === foundslug) {
            foundFilename = filename;
            break;
        }
    }

    if (foundFilename === '') {
        throw new Exception(`Unable to find slug`);
    }

    return foundFilename;

};

export default getPostFilename;