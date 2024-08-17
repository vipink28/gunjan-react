import Header from "./components/Header";
import ReactState from "./components/ReactState";

function App() {

  var title = "My new Component";


  return (
    <>
      <Header />
      <h3>{title}</h3>
      <p>This is app component</p>

      <ReactState />

    </>
  )
}
export default App;