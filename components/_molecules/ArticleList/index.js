import Link from 'next/link';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';

import ArticleCardList from '@/molecules/ArticleCardList';

const renderYearGroup = (year, articles, isMinimal) => {
    return (
        <section key={year}>
            <h3 className="font-display">{year}</h3>
            <ArticleCardList articles={articles} isMinimal={isMinimal} />
        </section>
    );
}

export default function ArticleList({ articles, showCardFooter, showCardDescription }) {

    const articlesByYear = groupBy(articles, (article) => {
        const year = article.frontmatter.date.year;
        return year;
    });

    const years = keys(articlesByYear);
    years.sort();
    years.reverse();

    return years.map((year) => (
                <section key={year}>
                <h3 className="font-display border-b mb-2 text-lg text-gray-600">{year}</h3>
                <ArticleCardList
                    articles={articlesByYear[year]}
                    showCardDescription={showCardDescription}
                    showCardFooter={showCardFooter} />
                </section>
    ));
}