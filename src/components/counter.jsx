import React, {Component} from 'react';

class Counter extends Component {
    OnDecrement=()=> {
        let counter=this.props.counter;
        if (counter.value>0){
            this.props.onDecrement(counter);
        }
    };
    render() {
        let cls="text-white bg-amber-800 p-2 rounded w-12 text-center";
        let val=this.props.counter.value;
        if(val===0){
            val="Zero";
            cls="text-white bg-orange-500 p-2 rounded";
        }
        return (
        <div className="flex flex-row justify-between w-auto m-2 px-4 py-0 rounded hover:bg-lime-400">

            <h1 className={cls}>{val}</h1>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="bg-blue-900 text-white py-2 px-4 font-bold rounded-2xl hover:mix-blend-multiply">+</button>
            <button onClick={()=>this.OnDecrement()} className="bg-blue-900 text-white py-2 px-5 font-bold rounded-2xl hover:mix-blend-multiply">-</button>
            <button onClick={()=>this.props.onRemove(this.props.counter)} className="bg-rose-600 text-white py-2 px-4 font-bold rounded-2xl hover:mix-blend-multiply">REMOVE</button>
        </div>
        );
    }
}

export default Counter;