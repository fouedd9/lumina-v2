export type AppTheme = {
  colors: {
    ink: string;
    strong: string;
    cream: string;
    paper: string;
    muted: string;
    orange: string;
    lime: string;
    line: string;
    white: string;
    whatsapp: string;
    input: string;
    inputBorder: string;
    softSurface: string;
    overlay: string;
  };
  radius: { sm: string; md: string; lg: string; xl: string; pill: string };
  shadow: { soft: string; lift: string };
  layout: { max: string };
  bp: { mobile: string; tablet: string };
};

const shared = {
  radius: { sm: "12px", md: "18px", lg: "28px", xl: "40px", pill: "999px" },
  layout: { max: "1160px" },
  bp: { mobile: "520px", tablet: "850px" },
};

export const lightTheme: AppTheme = {
  ...shared,
  colors: {
    ink: "#171715", strong: "#171715", cream: "#f6f2e9", paper: "#fffdf8",
    muted: "#6c6861", orange: "#ff7141", lime: "#dfff73", line: "#ded7cb",
    white: "#fff", whatsapp: "#25d366", input: "#fff", inputBorder: "#d7d0c5",
    softSurface: "#f0e6d3", overlay: "#f2eee6",
  },
  shadow: { soft: "0 24px 70px rgba(48,31,15,.14)", lift: "0 15px 35px rgba(0,0,0,.18)" },
};

export const darkTheme: AppTheme = {
  ...shared,
  colors: {
    ink: "#f5f1e9", strong: "#0f0f0e", cream: "#191917", paper: "#252421",
    muted: "#b9b5ad", orange: "#ff8155", lime: "#dfff73", line: "#4a4842",
    white: "#fff", whatsapp: "#25d366", input: "#1d1c1a", inputBorder: "#54514b",
    softSurface: "#37342d", overlay: "#37342d",
  },
  shadow: { soft: "0 24px 70px rgba(0,0,0,.42)", lift: "0 15px 35px rgba(0,0,0,.45)" },
};

export const theme = lightTheme;
