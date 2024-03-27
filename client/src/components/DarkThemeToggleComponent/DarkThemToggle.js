// const colorChange = async (theme) => {
//   document.documentElement.setAttribute("data-theme", theme);
//   localStorage.setItem("theme", theme);
// };
// const originalTheme = async () => {
//   let theme = localStorage.getItem("theme");
//   if (!theme) {
//     theme = "dark";
//   }
//   return theme;
// };

/**
 *
 * @param { "dark" | "light" } theme
 */
const colorChange = async (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/**
*
* @returns  { Promise<"dark" | "light"> }
*/
const originalTheme = async () => {
  let theme = localStorage.getItem("theme");
  if (!theme) {
      theme = "dark";
  }
  return theme;
}
export { colorChange, originalTheme };
