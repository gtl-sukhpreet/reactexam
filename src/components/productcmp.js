import React from 'react';

// Demo Products
const ProductDataList = [{
    id: 1,
    product_name: 'Test Product 1',

},
{
    id: 2,
    product_name: 'Test Product 2',

},
{
    id: 3,
    product_name: 'Test Product 3',

}
,
{
    id: 4,
    product_name: 'Test Product 4',

}
,
{
    id: 5,
    product_name: 'Test Product 5',

}
];


class ProductCmp extends React.Component {

    constructor() {
        super();
        const toDoCounter = 1;
        this.state = {
            cartDataProduct: [],
        };
    }
    // Add's Product to Cart    
    addProductToCart(item) {        
        const dataProduct = this.state.cartDataProduct;
        dataProduct.push(item)        
        this.setState({ cartDataProduct: dataProduct })

    }

    // Removes Product from Cart
    removeCart(item) {                
        var temparray = [...this.state.cartDataProduct]; 
        var index = temparray.indexOf(item)
        if (index !== -1) {
            temparray.splice(index, 1);
            this.setState({ cartDataProduct: temparray });
        }

    }

    // Sorting of the Product in cart
    sortProductCart(){
        const sortedProductList = this.state.cartDataProduct.sort(function(x, y) {
            if(x.product_name.toLowerCase() < y.product_name.toLowerCase()) return -1;
            if(x.product_name.toLowerCase() > y.product_name.toLowerCase()) return 1;
            return 0;
           });
          this.setState({
            list: [...sortedProductList],
          });
    }
    render() {    
        return (
            <div>                
                <center><h1>Products List</h1></center>
                <center><table border="1" cellSpacing="2" cellPadding="5">
                    {
                        ProductDataList.map((item, key) =>
                            <tbody key={item.id}>
                                <tr >
                                    <td>
                                        <label>{item.id}</label>
                                    </td>
                                    <td>
                                        {item.product_name}
                                    </td>
                                    <td>
                                        <button onClick={() => this.addProductToCart(item)} >
                                            Add to cart
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    }
                </table>
                </center>
                <div>
                
                
                <center><h1>My Cart</h1></center>
                    <center>
                    <br></br><div> <button onClick={() => this.sortProductCart()} >Sort Cart Product</button></div>
                    <br></br>
                </center>
                    <div>
                    <center>
                        <table border="1">
                            {
                                this.state.cartDataProduct.map((item, key) =>
                                    <tbody key={item.id}>
                                        <tr >
                                            <td>
                                                <label>{item.id}</label>
                                            </td>
                                            <td>
                                                {item.product_name}
                                            </td>
                                            <td>
                                            <button onClick={() => this.removeCart(item)} >
                                                   Remove Product
                                            </button>
                                            </td>

                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>                        
                        </center>  
                    </div>
                </div>
                
            </div>
        );
    }
}
export default ProductCmp;