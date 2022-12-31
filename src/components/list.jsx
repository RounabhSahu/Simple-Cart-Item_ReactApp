import React, {Component} from 'react';
import Counter from "./counter";
class List extends Component {
    render() {
        return (
            <div className="w-2/5 bg-lime-300 border border-green-600 min-w-fit">
                <div className="flex flex-col min-w-fit max-w-xs m-auto ">
                    {
                        this.props.list.map((counter)=>(<Counter
                            key={counter.id}
                            counter={counter}
                            onIncrement={()=>this.props.onIncrement(counter)}
                            onDecrement={()=>this.props.onDecrement(counter)}
                            onRemove={()=>this.props.onRemove(counter)}
                        />))}
                    <button onClick={()=>this.props.onAdd()} className="text-white m-2 py-2 px-4 bg-lime-600 rounded-xl place-self-center w-1/2 hover:bg-teal-500">ADD</button>
                </div>
            </div>
        );
    }
}

export default List;