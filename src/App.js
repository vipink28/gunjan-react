import Child from "./components/Child";
import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import FormHandling from "./components/FormHandling";
import Header from "./components/Header";
import Parent from "./components/Parent";
import ProductList from "./components/ProductList";
import ReactProps from "./components/ReactProps";
import ReactState from "./components/ReactState";
import StudentsList from "./components/StudentsList";
import { AppProvider } from "./context/AppContext";

function App() {

  var title = "My new Component";


  return (
    <>


      <AppProvider>
        <CounterReducer />
        <FormHandling />

        <Counter />
        <Parent />

        <ProductList />
      </AppProvider>





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