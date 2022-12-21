import { CardProps } from "./components/Card";

const date = new Date().getTime().toString();

export const cards: CardProps[] = [
  {
    title: "10 indicações incríveis para o dia nacional do livro",
    description:
      "Bom mesmo é quando o livro que acabamos de ler fica querendo ser um grande amigo e é capaz de marcar uma vida inteira. Neste sábado, onde comemora-se o Dia Nacional do Livro, o site do Livro & Fuxicos reuniu 10 escritoras e escritores nacionais para falarem sobre as leituras brasileiras favoritas de todos os tempos.",
    coverUrl:
      "https://www.livrosefuxicos.com/wp-content/uploads/2022/10/DIA-NACIONAL-DO-LIVRO.jpeg",
    coverImageDescription: "Lorem Ipsum",
    createdAt: date,
    genres: ["Dia Nacional do Livro", "Dicas de Livros", "Literatura"],
    variant: "default",
    content: "",
    book: {
      author: "vitor gouveia",
      title: "teoria das cordas",
    },
  },
  {
    title: "LANÇAMENTOS DO MÊS DE OUTUBRO",
    description:
      "Olá galera, tudo bem? Hoje é dia de conferir as novidades literárias deste mês de Outubro. Vamos dar dicas de vários livros e vários gêneros para que vocês possam escolher os que mais combinam com os seus respectivos estilos. Então vamos lá!",
    coverUrl:
      "https://www.livrosefuxicos.com/wp-content/uploads/2022/10/LANCAMENTOS-DE-OUTUBRO.jpeg",
    coverImageDescription: "Lorem Ipsum",
    createdAt: date,
    genres: ["Lançamentos Literários", "Literatura", "Novidades"],
    variant: "default",
    content: "",
    book: {
      author: "vitor gouveia",
      title: "teoria das cordas",
    },
  },
  {
    title: "VANTAGENS DE USAR UM PLANNER",
    description:
      "Olá galera, tudo bem? Hoje é dia de conferir as novidades literárias deste mês de Outubro. Vamos dar dicas de vários livros e vários gêneros para que vocês possam escolher os que mais combinam com os seus respectivos estilos. Então vamos lá!",
    coverUrl:
      "https://www.livrosefuxicos.com/wp-content/uploads/2022/10/VANTAGENS-DE-USAR-UM-PLANNER.jpeg",
    coverImageDescription: "Lorem Ipsum",
    createdAt: date,
    genres: ["Lançamentos Literários", "Literatura", "Novidades"],
    variant: "default",
    content: "",
    book: {
      author: "vitor gouveia",
      title: "teoria das cordas",
    },
  },
];
