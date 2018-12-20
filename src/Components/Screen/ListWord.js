import React, { Component } from 'react';
// import { Word } from '../shared/Word';
 
export class ListWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
                { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
                { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
            ],
            txtEn:'',
            txtVn:''
        };
        this.genWord = this.genWord.bind(this);
        this.addWord = this.addWord.bind(this);
    }

    removeWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.filter(w => w._id !== _id)
        }));
    }

    toggleWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.map(w => {
                if (w._id !== _id) return w;
                return {...w, isMemorized: !w.isMemorized };
            })
        }));
    }

    addWord() {
        const word = { 
            _id: Math.random + '',
            en: this.state.txtEn,
            vn: this.state.txtVn,
            isMemorized: true
        }
        this.setState(prevState => ({
            words : prevState.words.concat(word),
            txtEn:'',
            txtVn:''
        }));
    }

    genWord(word) {
        const engClassName = word.isMemorized ? { color: 'green' } : { color: 'red' };
        return (
            <div key={word._id}>
                <h3 style={engClassName}>{word.en}</h3>
                <p >{word.vn}</p>
                <button
                    style={{backgroundColor: 'red'}}
                    onClick={() => this.removeWord(word._id)}
                >
                    Remove
                </button>
            
                <button
                    style={{backgroundColor: 'orange'}}
                    onClick={() => this.toggleWord(word._id)}
                >
                    Toggle
                </button>
            </div>
        );
    }
 
    render() {
         return (
            <div>
                                <input 
                    placeholder = "English " 
                    className="form-control" 
                    value={this.state.txtEn}
                    onChange= {evt => this.setState({txtEn : evt.target.value})}
                />
                <br />
                <br />
                <input 
                    placeholder = "Vietnamese " 
                    className="form-control" 
                    value={this.state.txtVn}
                    onChange= {evt => this.setState({txtVn : evt.target.value})}
                />
                <br />
                <br />
                <button 
                    style={{backgroundColor: 'green'}}
                    onClick= {this.addWord}
                > 
                    ADD WORD FOR FORM 
                </button>
                { this.state.words.map(this.genWord) }
            </div>
        );
    }
}