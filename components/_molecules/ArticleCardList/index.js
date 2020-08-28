import ArticleCard from '@/molecules/ArticleCard';

export default function ArticleCardList({ articles }) {

    return (
        <section>
            {articles.map((article) => <ArticleCard  key={article.slug} {...article} />)}
        </section>
    );
}