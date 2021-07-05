import './App.css';
import Story from  './story/story'
import HeaderBar from './headerBar/headerBar';

function App() {
  return (
    <div className="App">
        <HeaderBar/>

      <Story title={"I began to study react"}
             overview={"It was really new experience"}
             text={"So now I making my project"}
             author={"Jack"}/>

    </div>
  );
}

export default App;
