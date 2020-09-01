import ArticleCard from '@/molecules/ArticleCard';

export default function ArticleCardList({ articles, showCardDescription, showCardFooter }) {

    return (
        <>
            {articles.map((article) => <ArticleCard  key={article.slug} showDescription={showCardDescription} showFooter={showCardFooter} {...article} />)}
        </>
    );
}