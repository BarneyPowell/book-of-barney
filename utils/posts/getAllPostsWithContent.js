import getPosts from '@/utils/posts/getPosts';
import loadPostContent from '@/utils/posts/loadPostContent';

export default function getAllPostsWithContent() {
    const allPosts = getPosts();
    return allPosts.map(({filename}) => loadPostContent(filename));
}