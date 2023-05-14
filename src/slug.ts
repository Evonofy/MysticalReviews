export const slugify = (string: string) =>
  String(string)
    .normalize("NFD") // removes accents
    .replace(/[\u0300-\u036f]/g, "") // needed because im using normalize
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "") // removes special characters
    .split(" ")
    .join("-")
