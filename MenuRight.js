import React from 'react';
// import MenuCards from './MenuCards';
import './Header';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import {addItemToCartReducer, removeItemFromCartReducer} from "redux";
import {addItemToCart, removeItemFromCart} from './actions/cartActions';


class MenuRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plus: false,
            minus: false,
            add: false,
            count: 0,
            cart: {},
            //as part of cat
            cat: []
        };
    }

    plus = (itemName) => {
        // this.setState({cart: {
        //     ...this.state.cart,
        //     [itemName]: (this.state.cart[itemName] || 0) + 1
        //    }
        // })
        this.setState({count: this.state.count + 1})
    }

    minus = (itemName) => {
        if(this.state.count>=1){
            // this.setState({cart: {
            //     ...this.state.cart,
            //     [itemName]: (this.state.cart[itemName]) - 1
            //    }
            // })
            this.setState({count: this.state.count - 1})
        }
    }

    add = () => {
        this.setState({plus: false})
        this.setState({minus: false})
        this.setState({add: true})
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className="MenuRightMain">
                <h3 className="MenuRightHeading">Top Picks</h3>
                    <div className="grid-container">  
                        {[...new Set(this.props.allItems.map(i=>i[1].category))].map(ch=><div key={ch}>
                            {ch}
                            {console.log(`category: ${ch}`)}
                            {this.props.allItems.filter(item=>{
                                return(item[1].category === ch? (<div key={item[0]} className="grid-item">
                                    <img className="dishImage" alt="Yumlane Pizza" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
                                    <div key={item[0]} className="dishName" >{console.log(item[1].name)} <span style={{paddingLeft: "2em"}}>₹{console.log(item[1].price)}</span></div>
                                    <div><button className="btn btn-light" 
                                            disabled={this.state.plus} 
                                            onClick={() => this.props.addItemToCart(item[1].name)}>
                                        +</button>
                                                    {/* {console.log(this.props.cart[item[1].name])} */}
                                        {this.props.cart[item[1].name]}
                                        <button className="btn btn-light" 
                                            disabled={this.state.minus} 
                                            onClick={()=> this.props.removeItemFromCart(item[1].name)}>
                                        -</button>
                                    </div>
                                </div>):console.log("out of loop"))
                            })}
                        </div>)}
                    </div>
            </div>
        )}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addItemToCart, removeItemFromCart }, dispatch)
}

const mapStateToProps = (store) => {
    return {
        cart: store.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuRight)



    //here we are giving acrionCreator names because the key and value are same ... refer below example


    // return {
    //     plus: () => dispatch(addItemToCart),
    //     minus: () => dispatch(addItemToCart)
    // }
    // ({  }, dispatch)

// export default MenuRight;


//const name = "ABC"
// //getNAme = () => ({
//     name: name
// })


//const name = "ABC"
// //getNAme = () => ({
//     name
// })

//here getName is returning an object

//when we have key and value with same name then we simply pass one thing




{/* {this.state.count >= 1 ? (<div><button className="btn btn-light" disabled={this.state.plus} onClick={this.props.addItemToCart}>+</button>{this.state.count}<button className="btn btn-light" disabled={this.state.minus} onClick={this.props.removeItemFromCart}>-</button></div>):(console.log("out of + & -"))} */}
                            
                                {/* {console.log(this.addItemToCart)} */}
                                {/* {this.state.count === 0 ? (<button type="button" disabled={this.state.add} className="btn btn-light addToCart" onClick={() => this.add(item[1].name)}>Add</button>):(console.log("out of add"))}
                                {this.state.count >= 1 ? (<div><button className="btn btn-light" disabled={this.state.plus} onClick={() => this.plus(item[1].name)}>+</button>{this.state.count}<button className="btn btn-light" disabled={this.state.minus} onClick={this.minus(item[1].name)}>-</button></div>):(console.log("out of + & -"))} */}


                                
                                {/* {this.state.count === 0 ? (<button type="button" disabled={this.state.add} className="btn btn-light addToCart" onClick={this.add}>Add</button>):(console.log("out of add"))} */}










                                {/* {this.state.count === 0 ? (<button type="button" 
                                                            disabled={this.state.add} 
                                                            className="btn btn-light addToCart" 
                                                            onClick={() => this.props.addItemToCart(item[1].name)}>Add</button>
                                                          ):
                                                          (this.state.count >= 1 ? 
                                                            ( */}


                                                                
                                                            {/* // ):
                                                            // (console.log("out of + & -")) */}

                                                            /////////////////////////////////////////////////


{/* <div className="MenuRightMain">
                <h3 className="MenuRightHeading">Top Picks</h3>
                <div className="grid-container">  
                {console.log(this.props.allItems)}
                    {this.props.allItems.map(item=>{
                        return(
                            <div className="grid-item">
                                <img className="dishImage" alt="Yumlane Pizza" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
                                <div key={item[0]} className="dishName" >{item[1].name} <span style={{paddingLeft: "2em"}}>₹{item[1].price}</span></div>
                                
                                                            <div><button className="btn btn-light" 
                                                                    disabled={this.state.plus} 
                                                                    onClick={() => this.props.addItemToCart(item[1].name)}>
                                                                    +</button>
                                                                    {/* {console.log(this.props.cart[item[1].name])} */}
                //                                                     {this.props.cart[item[1].name]}
                //                                                   <button className="btn btn-light" 
                //                                                     disabled={this.state.minus} 
                //                                                     onClick={()=> this.props.removeItemFromCart(item[1].name)}>
                //                                                     -</button>
                //                                              </div>
                                
                   
                                
                //             </div>
                //         )})}
                //     </div>
                // </div> */}














                 // {this.props.allItems.map(item=>{
                    //     return(
                            
                    //             [...new Set(this.props.allItems.map(i=>i[1].category))]
                                
                    //             <div className="grid-item">

                                    
                    //                 {/* // {console.log(this.props.allItems.map(i=>i[1].category))} */}
                    //             {/* {this.props.allItems.map(i=>{i[1].category})} */}
                    //                 <img className="dishImage" alt="Yumlane Pizza" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
                    //                 <div key={item[0]} className="dishName" >{item[1].name} <span style={{paddingLeft: "2em"}}>₹{item[1].price}</span></div>
                                    
                    //                                             <div><button className="btn btn-light" 
                    //                                                     disabled={this.state.plus} 
                    //                                                     onClick={() => this.props.addItemToCart(item[1].name)}>
                    //                                                     +</button>
                    //                                                     {/* {console.log(this.props.cart[item[1].name])} */}
                    //                                                     {this.props.cart[item[1].name]}
                                                                        

                    //                                                 <button className="btn btn-light" 
                    //                                                     disabled={this.state.minus} 
                    //                                                     onClick={()=> this.props.removeItemFromCart(item[1].name)}>
                    //                                                     -</button>
                    //                                             </div>                                   
                    //             </div>
                        
                    //     )})}
                //     </div>
                // </div>










            /////////////
            // if(item[1].category === ch){
            //     return(<div className="grid-item">
            //         <img className="dishImage" alt="Yumlane Pizza" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
            //         <div key={item[0]} className="dishName" >{console.log(item[1].name)} <span style={{paddingLeft: "2em"}}>₹{console.log(item[1].price)}</span></div>
            //             <div><button className="btn btn-light" 
            //                             disabled={this.state.plus} 
            //                             onClick={() => this.props.addItemToCart(item[1].name)}>
            //                             +</button>
            //                             {/* {console.log(this.props.cart[item[1].name])} */}
            //                              {this.props.cart[item[1].name]}
            //                           <button className="btn btn-light" 
            //                              disabled={this.state.minus} 
            //                              onClick={()=> this.props.removeItemFromCart(item[1].name)}>
            //                             -</button>
            //             </div>
            //     </div>)}
            //     else return "null"








            //////////////////
            {/* {console.log(this.props.allItems)}
                {this.props.allItems.map(item=>{
                    return(
                        <div className="grid-item">
                            <img className="dishImage" alt="Yumlane Pizza" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
                            <div key={item[0]} className="dishName" >{item[1].name} <span style={{paddingLeft: "2em"}}>₹{item[1].price}</span></div>
                            
                                                        <div><button className="btn btn-light" 
                                                                disabled={this.state.plus} 
                                                                onClick={() => this.props.addItemToCart(item[1].name)}>
                                                                +</button>
                                                                {console.log(this.props.cart[item[1].name])}
                                                                 {this.props.cart[item[1].name]}
                                                              <button className="btn btn-light" 
                                                                 disabled={this.state.minus} 
                                                                 onClick={()=> this.props.removeItemFromCart(item[1].name)}>
                                                                -</button>
                                                          </div>
                            
               
                            
                         </div>
                     )})} */}

                     ///////////////////////////////
                     // [...new Set(this.props.allItems.map(i=>i[1].category))].map(ch=>{

                                  // {/* console.log(ch) */}
                            // this.props.allItems.filter(item=>{
                            //     if(item[1].category === ch)
                            //     console.log(item)
                        // })})