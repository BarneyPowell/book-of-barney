import Link from 'next/link';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';

import ArticleCardList from '@/molecules/ArticleCardList';

const renderYearGroup = (year, articles) => {
    return (
        <section key={year}>
            <h3 className="font-display">{year}</h3>
            <ArticleCardList articles={articles} />
        </section>
    );
}

export default function ArticleList({ articles }) {

    const articlesByYear = groupBy(articles, (article) => {
        const year = article.frontmatter.date.year;
        return year;
    });

    const years = keys(articlesByYear);
    years.sort();
    years.reverse();

    return (
        <section className="p-4">
            {years.map((year) => renderYearGroup(year, articlesByYear[year]))}
        </section>
    );
}