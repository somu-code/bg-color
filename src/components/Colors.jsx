export function Colors({ setColor }) {
  return (
    <div className="bg-gray-600 p-4 rounded-full mb-4">
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-red-500 rounded-full"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-green-500 rounded-full"
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-blue-500 rounded-full"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-[olive] rounded-full"
        onClick={() => setColor("olive")}
      >
        Olive
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-gray-500 rounded-full"
        onClick={() => setColor("gray")}
      >
        Gray
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-yellow-500 rounded-full"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-pink-500 rounded-full"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-purple-500 rounded-full"
        onClick={() => setColor("purple")}
      >
        Purple
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-black bg-[#E6E6FA] rounded-full"
        onClick={() => setColor("#E6E6FA")}
      >
        Levender
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-black bg-white rounded-full"
        onClick={() => setColor("white")}
      >
        White
      </button>
      <button
        className="text-lg font-semibold px-4 py-1 mx-2 text-white bg-black rounded-full"
        onClick={() => setColor("black")}
      >
        Black
      </button>
    </div>
  );
}
