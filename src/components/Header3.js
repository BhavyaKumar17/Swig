import React from 'react';
import './Header.css';

class Header3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="teesri">
                <div className="third1">
                <a href="C:\Users\Bhavy\Desktop\JSF\HW\boot-swig\src\components\Dummy.html">
                        <img className= "thirdImg thirdOne" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/vkgr1esyzxqwpg7mzz15" alt="Plate" /> 
                        <img className= "thirdImg thirdTwo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/vkgr1esyzxqwpg7mzz15" alt="Plate" /> 
                </a>
                </div>
                <div className="third2"><a href="C:\Users\Bhavy\Desktop\JSF\HW\boot-swig\src\components\Dummy.html"><h4>Introducing Swiggy Pop</h4><span id="third2Span">Single Serve Meals, Free Delivery, No Extra Charges</span></a></div>
                <button type="button" className="btn btn-danger">ORDER NOW</button>
            </div>
        );
    }
}


export default Header3;
