import React from 'react';
import './Header';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addItemToCart, removeItemFromCart} from './actions/cartActions';

class MenuRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    return (
        <div className="MenuRightMain">
            <h3 className="MenuRightHeading">Top Picks</h3>
                <div className="grid-container">  
                {console.log(this.props.allItems)}
                    {[...new Set(this.props.allItems.map(i=>i[1].category))].map(ch=>{
                        return <div key={ch}>
                            {ch}
                            {console.log(`category: ${ch}`)}
                            {this.props.allItems.filter(item=>{
                                if(item[1].category === ch){ 
                                    return( <div key={item[0]} className="grid-item">
                                        <img className="dishImage" alt="Yumlane Pizza" 
                                            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item[1].cloudinaryImageId}`} />
                                        <div className="dishName" >
                                            {item[1].name} 
                                            <span style={{paddingLeft: "2em"}}>
                                                ₹{item[1].price}
                                            </span>
                                        </div>
                                        <div>
                                            <button className="btn btn-light" onClick={() => this.props.addItemToCart(item[1].name)}>+</button>
                                                {this.props.cart[item[1].name]}
                                            <button className="btn btn-light" onClick={()=> this.props.removeItemFromCart(item[1].name)}>-</button>
                                        </div>
                                    </div>)
                                
                            }})}
                        </div>
                    })}
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
