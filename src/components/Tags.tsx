// Stitches Config
import { styled } from "../stitches.config";

const Heading1 = styled("h1", {
  fontSize: "$4xl",
  fontFamily: "$default",

  variants: {
    size: {
      tablet: {
        fontSize: "$5xl",
      },
      desktop: {
        fontSize: "$6xl",
      },
    },
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Heading2 = styled("h2", {
  fontSize: "$2xl",
  fontFamily: "$default",

  variants: {
    size: {
      tablet: {
        fontSize: "$4xl",
      },
      desktop: {
        fontSize: "$6xl",
      },
    },
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Heading3 = styled("h3", {
  fontSize: "$xl",
  fontFamily: "$default",

  variants: {
    size: {
      tablet: {
        fontSize: "$2xl",
      },
      desktop: {
        fontSize: "$4xl",
      },
    },
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Paragraph = styled("p", {
  fontSize: "$xs",
  fontFamily: "$default",

  variants: {
    size: {
      tablet: {
        fontSize: "$md",
      },
      desktop: {
        fontSize: "$xl",
      },
    },
  },
});

const Small = styled("small", {
  fontSize: "$xxs",
  fontFamily: "$default",

  variants: {
    size: {
      tablet: {
        fontSize: "$xs",
      },
      desktop: {
        fontSize: "$sm",
      },
    },
  },
});

export const Tags = {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Small,
};
