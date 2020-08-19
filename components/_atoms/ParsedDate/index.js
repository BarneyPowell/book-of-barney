
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

    return (
        <>{parsedDate.toLocaleDateString('en-GB', options)}</>
    )
}