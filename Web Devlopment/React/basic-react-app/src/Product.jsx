import "./Product.css"

function Product({title, Price}){
    // const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount  = Price > 30000;;
    let style  = {backgroundColor : isDiscount ? "pink" : ""};
    return(
        <div className="Product" style={style}>
            <h3>{title}</h3>
            <h5>Price : {Price}</h5>
            {/* <p>{list}</p> */}
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
            {/* {Price > 30000 ? "5% of Discount" : null} */}
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    )
}

export default Product;