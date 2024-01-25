import { useState } from "react";
import { Colors } from "./components/Colors";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-screen h-screen flex flex-col items-center justify-end"
        style={{ backgroundColor: color }}
      >
        <Colors color={color} setColor={setColor} />
      </div>
    </>
  );
}

export default App;
