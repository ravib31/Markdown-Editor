import "./App.css";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center my-5 text-2xl font-bold">
          Markdown Editor with Live Preview
        </h1>

        <MarkdownEditor />
      </div>
    </>
  );
}

export default App;
