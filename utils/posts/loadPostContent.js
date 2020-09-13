import loadPost from './loadPost';

const loadPostContent = (filename) => {
    return loadPost(filename, { includeContent: true });
}

export default loadPostContent;