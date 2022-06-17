import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <InlineWidget
        url="https://calendly.com/gabriel-melo"
        styles={{
          height: "458px",
          minWidth: "560px",
        }}
        pageSettings={{
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
};

export default App;
