import React,{useReducer} from 'react'
import './App.css';
import data from './data/data'
import rendered from './Function/rendered'

const resData = data.data

const initState = {
  formData:{}
}
const reducer = (state,action)=>{

}
function App() {
  const [state,dispatch] = useReducer(reducer,initState)
  return (
    <div className="App">
      {
        resData.map((config,index) => rendered(config,index))
      }
    </div>
  );
}

export default App;
