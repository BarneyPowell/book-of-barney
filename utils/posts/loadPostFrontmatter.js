import './loadPostContent';
import loadPost from './loadPost';

const loadPostFrontmatter = (filename) => {
    return loadPost(filename, { includeContent: false });
}

export default loadPostFrontmatter;