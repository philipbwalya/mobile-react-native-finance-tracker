// constants/colors.js
const coffeeTheme = {
  primary: "#8B593E",
  background: "#FFF8F3",
  lightBackground: "#FFF8F3",
  inputBackground: "#FFFFFF",
  placeholder: "#6B7280 ",
  text: "#4A3428",
  border: "#E5D3B7",
  white: "#FFFFFF",
  textLight: "#9A8478",
  expense: "#E74C3C",
  income: "#247147",
  card: "#FFFFFF",
  shadow: "#000000",
};
const midnightTheme = {
  primary: "#7C4DFF",
  background: "#000000",
  lightBackground: "#0E0E11",
  text: "#FFFFFF",  
  textSecondary: "#B0B0B0", 
  border: "#1C1C1FF",  
  card: "#1A1A1D",  
  white: "#FFFFFF",  
  textLight: "#7C4DFF", 
  expense: "#EF5350", 
  income: "#26A69A",
  shadow: "#000000",
  warning: "#FFB300",
  info: "#4FC3F7",
  accent: "#424242",
  // chartSpent: "#7E57C2",
  // chartRemaining: "#4DB6AC",
  inputBackground: "#1E1E23",
  inputText: "#FFFFFF",
  placeholder: "#888888",
  inputBorder: "#2C2C31",
  inputFocus: "#7C4DFF",
};

const forestTheme = {
  primary: "#2E7D32",
  background: "#E8F5E9",
  lightBackground: "#E8F5E9",
  inputBackground: "#FFFFFF",
  placeholder: "#FFFFFF",
  text: "#1B5E20",
  border: "#C8E6C9",
  white: "#FFFFFF",
  textLight: "#66BB6A",
  expense: "#C62828",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const purpleTheme = {
  primary: "#6A1B9A",
  background: "#F3E5F5",
  lightBackground: "#F3E5F5",
  inputBackground: "#FFFFFF",
  placeholder: "#FFFFFF",
  text: "#4A148C",
  border: "#D1C4E9",
  white: "#FFFFFF",
  textLight: "#BA68C8",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const oceanTheme = {
  primary: "#0277BD",
  background: "#E1F5FE",
  lightBackground: "#E1F5FE",
  inputBackground: "#FFFFFF",
  placeholder: "#FFFFFF",
  text: "#01579B",
  border: "#B3E5FC",
  white: "#FFFFFF",
  textLight: "#4FC3F7",
  expense: "#EF5350",
  income: "#26A69A",
  card: "#FFFFFF",
  shadow: "#000000",
};



export const THEMES = {
  dark: midnightTheme,
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.coffee;
// export const COLORS = THEMES.dark
