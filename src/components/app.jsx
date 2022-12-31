import React, {Component} from 'react';
import List from './list';
import Nav from './nav';
class App extends Component {
    state={
        list:[
            {id:0,value:4},
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ],
        totalValue:1
    }
    handleIncrement=counter=>{
        const list=[...this.state.list];
        const index=list.indexOf(counter);
        list[index]= {...counter};
        list[index].value++;
        this.setState({
            list
        })
    };
    handleDecrement=counter=>{
        const list=[...this.state.list];
        const index=list.indexOf(counter);
        list[index]= {...counter};
        list[index].value--;
        this.setState({
            list
        })
    };
    handleRemove=counter=>{
        let list=[];

        for (let i=0;i<this.state.list.length;i++){
            if (this.state.list[i]===counter)continue;
            list.push(this.state.list[i]);
        }
        this.setState({
            list
        })
    }
    handleAdd=()=>{
        let list=[...this.state.list];
        let lastId=0
        if(list.length!==0) lastId=list[list.length - 1].id + 1;
        list.push({id: lastId, value: 0});
        this.setState({list:list});

    };

    handleReset=()=>{
        let list=[
            {id:0,value:2},
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
        ]

        this.setState({list:list})
    }

    render() {
        return (
            <div className="flex flex-col place-items-center">
                <Nav
                    onReset={this.handleReset}

                    totalValue={this.state.list.filter(c=>c.value>0).length}
                />
                <List
                    list={this.state.list}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onRemove={this.handleRemove}
                    onAdd={this.handleAdd}
                />
            </div>
        );
    }
}

export default App;