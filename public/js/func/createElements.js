export default function createElement(tagName, innerText = null, classList = null) {
  const newElement = document.createElement(String(tagName));
  if (innerText !== null) newElement.innerText = innerText;

  if (classList !== null) {
    //classlist can be of type: string, class or array
    typeof classList === "string" || typeof classList === 10
      ? newElement.classList.add(String(classList))
      : arrayOfCLasses(newElement, classList);
  }

  return newElement;
}

//adds an array of classes to selected HTMl element.
function arrayOfCLasses(htmlElement, classList = []) {
  if (classList.length <= 0) return;

  classList.forEach((className) => {
    htmlElement.classList.add(String(className));
  });
}
