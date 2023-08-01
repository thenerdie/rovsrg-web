export function legacyRatingToMMR(rating) {
    return 0.55 * rating * rating + 500
}