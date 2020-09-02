
const WORDS_PER_MINUTE = 200;

const getReadingTime = (content) => {


    let result = {};
    //Matches words
    //See
    //https://regex101.com/r/q2Kqjg/6
    const regex=/\w+/g;
    result.wordCount = (content || '').match(regex).length;

    result.exactMins = result.wordCount / WORDS_PER_MINUTE;
    result.roundedMins = Math.ceil(result.exactMins);
    return result;

}

export default getReadingTime;