import React, { Component} from 'react';

// function log123() { console.log(123);}

export class StateExam extends Component {

    constructor(pros) {
        super(pros); // khởi tạo phương thức khác
        this.state = { count : 1}
        //state là  1 thuộc tính đặc biệt
    }

    render() {
        return (
            <div> 
                <h3> Value = {this.state.count}</h3>
                <button 
                    className='btn btn-success'
                    // onClick={() => this.setState({ count : this.state.count +1})}>
                    onClick={()=> this.setState(preState =>({ count : preState.count +1}))}>
                    Increase
                </button>
            </div>
        );
    }
}