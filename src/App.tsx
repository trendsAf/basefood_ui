import { testString } from "./utils/test";

function App() {
  return (
    <>
      {testString.map((test, idx) => (
        <h1 className="text-blue-600 text-5xl p-4 text-center" key={idx}>
          {test.title}
        </h1>
      ))}
    </>
  );
}

export default App;
