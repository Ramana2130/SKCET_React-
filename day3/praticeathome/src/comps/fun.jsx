import { useState } from "react";

const GokuTransformation = () => {
  const [currentState, setState] = useState("Kaioken");

  return (
    <div>
      <input
        type="checkbox"
        onChange={() =>
          setState(currentState === "Kaioken" ? "SuperSaiyan" : "Kaioken")
        }
      />
      <h1 className="font-bold text-2xl">{currentState}</h1>
    </div>
  );
};

export default GokuTransformation;