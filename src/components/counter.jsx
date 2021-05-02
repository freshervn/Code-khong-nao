import React, { Component } from 'react';
class counter extends Component {        
    render() {      
        // console.log('pros',this.props);   
        return (
            <div style={{padding:10}}>            
            {this.props.children}
            <span style={{fontSize:20,margin:10}} className={this.getbadgeClasses()}>{this.formatCount()}</span> 
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'
            > increment
            </button>                              
            <button 
                className='btn btn-danger m-2' 
                onClick={ () => this.props.onDelete(this.props.counter.id)}
            >
                Delete
            </button>
            </div>
        ); 
    }
    getbadgeClasses() {
        let classes = 'badge ';
        classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
}
export default counter;