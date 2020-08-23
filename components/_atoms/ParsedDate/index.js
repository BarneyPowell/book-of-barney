import { format, formatDistance, formatRelative, subDays } from 'date-fns';

export default function ParsedDate({date, weekday, year, month, day}) {

    const options = {
        weekday,
        year,
        month,
        day
    };

    const time = Date.parse(date);
    const parsedDate = new Date();
    parsedDate.setTime(time);

    const out = formatDistance(parsedDate, new Date(), { addSuffix: true });

    return (
        <>{out}</>
    )
}