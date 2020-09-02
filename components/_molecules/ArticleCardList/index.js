import ArticleCard from '@/molecules/ArticleCard';

export default function ArticleCardList({ articles, showCardDescription, showCardFooter, showCardExtract }) {

    return (
        <>
            {articles.map((article) => <ArticleCard  key={article.slug} showDescription={showCardDescription} showFooter={showCardFooter} showExtract={showCardExtract} {...article} />)}
        </>
    );
}