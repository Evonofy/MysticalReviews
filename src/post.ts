export type Post = {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  createdAt: number
  content: string

  book: {
    author: string
    name: string
  }
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
    content:
      "A certificação de metodologias que nos auxiliam a lidar com o consenso sobre a necessidade de qualificação afeta positivamente a correta previsão das formas de ação. Por outro lado, o início da atividade geral de formação de atitudes agrega valor ao estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições. Pensando mais a longo prazo, a complexidade dos estudos efetuados causa impacto indireto na reavaliação do levantamento das variáveis envolvidas. Por conseguinte, o surgimento do comércio virtual é uma das consequências do sistema de participação geral. O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa acarreta um processo de reformulação e modernização de alternativas às soluções ortodoxas.",
    book: {
      author: "Obunga bungha",
      name: "pokemom",
    },
  },
  {
    title: "Quarta Capa, O livro sobre livros",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://i1.sndcdn.com/artworks-000369589368-pucuvi-t500x500.jpg",
    createdAt: new Date().getTime(),
    content:
      "A certificação de metodologias que nos auxiliam a lidar com o consenso sobre a necessidade de qualificação afeta positivamente a correta previsão das formas de ação. Por outro lado, o início da atividade geral de formação de atitudes agrega valor ao estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições. Pensando mais a longo prazo, a complexidade dos estudos efetuados causa impacto indireto na reavaliação do levantamento das variáveis envolvidas. Por conseguinte, o surgimento do comércio virtual é uma das consequências do sistema de participação geral. O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa acarreta um processo de reformulação e modernização de alternativas às soluções ortodoxas.",
    tags: ["Tag", "Cool"],
    book: {
      author: "Obunga bungha",
      name: "pokemom",
    },
  },
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://i1.sndcdn.com/artworks-000369589368-pucuvi-t500x500.jpg",
    createdAt: new Date().getTime(),
    tags: ["TAG", "TAG", "TAG", "TAG"],
    content:
      "A certificação de metodologias que nos auxiliam a lidar com o consenso sobre a necessidade de qualificação afeta positivamente a correta previsão das formas de ação. Por outro lado, o início da atividade geral de formação de atitudes agrega valor ao estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições. Pensando mais a longo prazo, a complexidade dos estudos efetuados causa impacto indireto na reavaliação do levantamento das variáveis envolvidas. Por conseguinte, o surgimento do comércio virtual é uma das consequências do sistema de participação geral. O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa acarreta um processo de reformulação e modernização de alternativas às soluções ortodoxas.",
    book: {
      author: "Obunga bungha",
      name: "pokemom",
    },
  },
]
