import './App.css'
// import { Tittle } from './Tittle'
// import {Tittle} from './Tittle'
// import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from './MsgBox.jsx'
import Button from './Button.jsx'
import Form from './Form.jsx'

function Description(){
  return (
    <div>
      <h3>This is a Desription!</h3>
    </div>
  )
}

function App() {
  return (
    <>
      {/* <Tittle/>
      <Description/>
      <Tittle/>
      <Description/> */}

      {/* <Product/>
      <Product/> */}

      {/* <MsgBox username="Saurav" textColor="green" /> 
      <MsgBox username="Gautam" textColor="yellow" />  */}
      {/* <Button/> */}
      {/* <ProductTab/>  */}
      <Form/>
    </>
  )
}

export default App
