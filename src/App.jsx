import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
  // Returned JSX
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />

      <div
        style={{
          height: "500vh",
          backgroundImage:
            "linear-gradient(red 0%, green 33%, yellow 66%, blue 100%",
        }}
      ></div>
    </>
  );
}

export default App;
