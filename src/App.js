import './App.css';
import ArrayDataType from './components/useStateHook/ArrayDataType';
import BooleanDataType from './components/useStateHook/BooleanDataType';
import NumberDataType from './components/useStateHook/NumberDataType';
import ObjectDataType from './components/useStateHook/ObjectDataType';
import StringDataType from './components/useStateHook/StringDataType';
function App() {
  return (
    <div className="App">
      <h2>Boolean Data Type</h2>
      <BooleanDataType />
      <hr />
      <h2>Number Data Type</h2>
      <NumberDataType />
      <hr />
      <h2>String Data Type</h2>
      <StringDataType />
      <hr />
      <h2>Array Data Type</h2>
      <ArrayDataType />
      <hr />
      <h2>Object Data Type</h2>
      <ObjectDataType />
    </div>
  );
}

export default App;
