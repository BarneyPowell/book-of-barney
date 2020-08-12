import getPosts from './getPosts';

const getPostFromSlug = (slug) => {

    // Need to get a list of all the files
    // then parse the filename looking for the slug.
    const posts = getPosts();

    for (let x = 0; x < posts.length; x ++) {

        if (slug === posts[x].slug) {
            return posts[x];
        }
    }

    throw new Exception(`Unable to find slug`);

};

export default getPostFromSlug;