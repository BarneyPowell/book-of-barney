import ArticleCard from '@/molecules/ArticleCard';

export default function ArticleCardList({ articles }) {

    return (
        <>
            {articles.map((article) => <ArticleCard  key={article.slug} {...article} />)}
        </>
    );
}