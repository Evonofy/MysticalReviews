/**
 *
 * @param {string} string
 * @returns {string}
 */
export const slugify = (string) =>
  String(string)
    .normalize("NFD") // removes accents
    .replace(/[\u0300-\u036f]/g, "") // needed because im using normalize
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "") // removes special characters
    .split(" ")
    .join("-");
