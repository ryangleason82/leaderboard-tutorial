import React from "react";
import { useFormHooks } from "./Hooks/FormHooks";
import { InputForm } from "./Input/InputForm";
import { OutputForm } from "./Output/OutputForm";

function App() {
  const { inputs, handleInputChange, handleFinal, final } = useFormHooks();
  return (
    <div className="container mt-4">
      <InputForm
        title="Leaderboard"
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleFinal={handleFinal}
      />
      <OutputForm final={final} />
    </div>
  );
}

export default App;
