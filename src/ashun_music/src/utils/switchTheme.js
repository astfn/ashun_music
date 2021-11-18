export const switchTheme = (themeData) => {
  for (const [property, value] of Object.entries(themeData)) {
    document.documentElement.style.setProperty(property, value);
  }
};
