export default function getSafeTagSlug(tag) {
    return encodeURI(tag
        .replace(' ', '')
        .toLowerCase());
}