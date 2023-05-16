export type Post = {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  createdAt: number
}

export const posts: Post[] = [
  {
    title: "Hello world",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl:
      "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
    createdAt: new Date().getTime(),
    tags: ["Design", "Research", "Presentation"],
  },
  {
    title: "Quarta Capa, O livro sobre livros",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://i1.sndcdn.com/artworks-000369589368-pucuvi-t500x500.jpg",
    createdAt: new Date().getTime(),
    tags: ["Tag", "Cool"],
  },
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://i1.sndcdn.com/artworks-000369589368-pucuvi-t500x500.jpg",
    createdAt: new Date().getTime(),
    tags: ["TAG", "TAG", "TAG", "TAG"],
  },
]
