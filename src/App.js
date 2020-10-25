import './App.css';
import data from './data/data'
import rendered from './Function/rendered'

const resData = data.data
function App() {
  return (
    <div className="App">
      {
        resData.map(config => rendered(config))
      }
    </div>
  );
}

export default App;
