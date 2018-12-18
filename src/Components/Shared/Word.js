import React, { Component} from 'react';

export class Word extends Component {
    getButton() {
        if (this.props.wordInfo.isMemorized) {
            return <button className= "btn btn-warning"> FORGOT </button>;
        }
        return <button className= "btn btn-success"> MEMORIZED </button>
    }
    render() {
        const {en, vn, isMemorized} = this.props.wordInfo;
        const engClassName = isMemorized ? 'text-success': 'text-danger'
        return (
            <div> 
            <h3 className={engClassName}> 
                {isMemorized ? '-----': en} 
            </h3>
            <p> {vn} </p>
            {this.getButton()}
            </div>
        );
    }
}