import getPosts from './getPosts';

const getPostFilename = (postSlug) => {

    // Need to get a list of all the files
    // then parse the filename looking for the slug.
    const posts = getPosts();

    let foundFilename = '';
    for (let x = 0; x < posts.length; x ++) {
        let { filename, slug } = posts[x];

        if (slug === postSlug) {
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