import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = "Please select a tab";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>YOu look pretty</h2>
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
                <TabButton onSelect={() => handleSelect("components")}>
                  Components
                </TabButton>
                <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect("props")}>
                  Props
                </TabButton>
                <TabButton onSelect={() => handleSelect("state")}>
                  State
                </TabButton>
              </menu>
              {tabContent}
            </h2>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
