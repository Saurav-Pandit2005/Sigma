import Product from "./Product"

function ProductTab (){
    //  let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
    // let options = ["hi-tech", "durable", "fast"];
    // let feactures2 = {a:"hi-tech", b:"durable", c:"fast"};
    return (
        <>
        <Product title="Phone" Price={25000}/>
        <Product title="Laptop" Price={70000}/>
        <Product title="Book" Price={40}/>
        <Product title="Pen" Price={10}/> 
        </>
    );
}
export default ProductTab;