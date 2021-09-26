const rootElement = document.querySelector("#root");

const greetingElement = React.createElement(
  "div",
  { className: "greeting" },
  "Hello, React!"
);

ReactDOM.render(greetingElement, rootElement);
