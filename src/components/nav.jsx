import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="flex flex-row bg-orange-50 border border-amber-500 w-2/5 min-w-fit justify-center">
                <span className="my-2 py-2 px-6 bg-gray-200 rounded-bl h-1/2 font-bold" >Navbar</span>
                <ul className="flex flex-row my-0 justify-items-start">
                    <li className="m-2 py-2 px-4 bg-gray-500 rounded text-white min-w-fit font-extrabold hover:bg-gray-600"><button onClick={()=>this.props.onReset()}>Reset</button></li>
                    <li className="m-2 py-2 px-4 bg-blue-200 rounded text-purple-900 min-w-fit">Total Items : <span className="bg-yellow-500 p-1 px-2 m-0 ml-2 text-blue-900 rounded font-bold">{this.props.totalValue}</span></li>
                </ul>
            </div>
        );
    }
}

export default Nav;