import Child from "./components/Child";
import Header from "./components/Header";
import ReactProps from "./components/ReactProps";
import ReactState from "./components/ReactState";
import StudentsList from "./components/StudentsList";

function App() {

  var title = "My new Component";


  return (
    <>
      <Child heading="App Child" color="pink" showHeading={true} />
      <Header />
      <h3>{title}</h3>
      <p>This is app component</p>
      <ReactState />
      <StudentsList />
      <ReactProps />
    </>
  )
}
export default App;