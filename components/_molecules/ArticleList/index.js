import ArticleCard from '@/molecules/ArticleCard';

export default function ArticleList({ articles }) {
    return (
        <div>
            {articles.map((article) => <ArticleCard  key={article.slug} {...article} />)}
        </div>
    );
}