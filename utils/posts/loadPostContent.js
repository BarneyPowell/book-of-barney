import loadPost from './loadPostContent';

const loadPostContent = (filename) => {
    return loadPost(filename, { includeContent: true });
}

export default loadPostContent;