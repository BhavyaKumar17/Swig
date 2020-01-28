import React from 'react';
import {connect} from "react-redux";

class MenuLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <div className="MenuLeft">
                Cart
                {/* {this.props.cart} */}
                {Object.entries(this.props.cart).map(([key, val]) => (<div key = {key}>{key}: {val}</div>))}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        cart: store.cart
    }
}
export default connect(mapStateToProps,null)(MenuLeft)

// export default MenuLeft;
