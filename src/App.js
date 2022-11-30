import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./components/Question";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {question.map((prop) => {
            return <SingleQuestion key={prop.id} prop={prop} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
