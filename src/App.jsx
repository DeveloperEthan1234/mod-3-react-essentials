import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* shorthand */}
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            {/* longhand */}
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>
            <menu>
              <TabButton onSelect={handleSelect}>Components</TabButton>
              <TabButton onSelect={handleSelect}>JSX</TabButton>
              <TabButton onSelect={handleSelect}>Props</TabButton>
              <TabButton onSelect={handleSelect}>State</TabButton>
            </menu>
            {selectedTopic}
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
