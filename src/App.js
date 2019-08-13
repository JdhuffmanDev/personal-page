import React from "react";
import "./App.css";

function ContentCard(props) {
  return <div className="ContentCard">{props.children}</div>;
}

function Section(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

var contentArray = [
  {
    title: "lorem",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    title: "lorem",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header">WELCOME TO</h1>
        <h2 id="test">Test Site</h2>
      </header>
      <body>
        {contentArray.map(function (obj) {
          return (
            <ContentCard>
              <Section title={obj.title} content={obj.content} />
            </ContentCard>
          );
        })}
      </body>
    </div>
  );
}

export default App;
