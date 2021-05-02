import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        Counters:[
            {id:1,value:0}
            ,{id:2,value:1}
            ,{id:3,value:2}
            ,{id:4,value:3}        
        ]
    }
    handelIncrement = counter =>{
        const counters = [...this.state.Counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        counters[index]={ ...counter};
        this.setState({counters});
    }
    handelReset = () => {
        const counters = this.state.Counters.map(c => {
            c.value = 0; 
            return c;
        });
        this.setState({counters});
    }
    handelDelete = CounterID => {
        // const counters = this.state.counters.filter(c => c.id !== CounterID );
        // console.log('even handel',CounterID,counters);        
        // this.setState({counters:counters});
        const counters = this.state.Counters.filter(c => c.id !== CounterID);
        this.setState({Counters:counters});
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handelReset} className='btn btn-primary btn-sm m-2'>
                Reset
                </button>
                {this.state.Counters.map(counter => 
                <Counter 
                    key={counter.id}
                    onDelete={this.handelDelete} 
                    onIncrement={this.handelIncrement}
                    counter={counter}
                >                    
                </Counter>)}
            </div>
        );
    }
}
export default Counters;