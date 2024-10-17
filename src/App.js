import './App.css';
import  Navbar from './components/JSX/Navbar';
import ItemListContainer from './components/JSX/ItemListContainer';


function App() {
  const prop = "Prop Hello! 👋"
  return (
    <div>
      <Navbar />
      <ItemListContainer prop={prop} />
    </div>
  );
}

export default App;
