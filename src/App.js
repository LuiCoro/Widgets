import React from 'react';
import Accordion from "./components/Accordion";

// Some dummy data
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const App = () => {
  return (
    <div>
      {/* items array being used as props */}
      <Accordion items={items} />
    </div>
  );
};

export default App;