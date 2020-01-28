import React from 'react';
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';
import axios from 'axios';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainItems: []
        };
    }

    componentDidMount(){
        axios.get('https://food-power.glitch.me/restaurant/25225')
            .then(res => {
                // console.log(res.data.data.menu.items)
                const mainItems = Object.entries(res.data.data.menu.items);
                this.setState({ mainItems: mainItems });
            })
    }


    render() {
        return (
            <div>
                <MenuLeft />          
                <MenuRight allItems={this.state.mainItems}/>      
            </div>
        );
    }
}


export default Menu;
