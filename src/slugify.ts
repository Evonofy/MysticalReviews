export const slugify = (string: string) =>
  string.split(" ").join("").toLowerCase();
