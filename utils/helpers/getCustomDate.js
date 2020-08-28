import { format, parseISO, formatDistance } from 'date-fns';

const getCustomDate = (dateString) => {

    const date = parseISO(dateString);

    return {
        string: dateString,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        full: format(date, 'eeee, do MMMM yyyy'),
        medium: format(date, 'do MMMM yyyy'),
        distance: formatDistance(date, new Date(), { addSuffix: true })
    }

}

export default getCustomDate;