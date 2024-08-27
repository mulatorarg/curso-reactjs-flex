import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer
        mensaje={"Mensaje desde prop!!"} />
    </>
  )
}

export default App
