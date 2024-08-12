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
    </>
  );
}

export default App;
