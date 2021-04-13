import { Component } from 'react';
import './style.css'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valueLeader: '',
            valueLeaderPost: '',
            valueCapital: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state.value, this.state.valueLeader, this.state.valueLeaderPost, this.state.valueCapital);

    }

    onChange = (e) => {

        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
        /*this.setState({
            value: e.target.value

        })*/
    }


    render() {
        return(
            <form className='form' onSubmit={this.onSubmit}>

                <input name="value"
                       type="string"
                       value= {this.state.value}
                       onChange={this.onChange}/>

                <input name="valueLeader"
                       type="string"
                       value= {this.state.valueLeader}
                       onChange={this.onChange}/>

                <input name="valueLeaderPost"
                       type="string"
                       value= {this.state.valueLeaderPost}
                       onChange={this.onChange}/>

                <input name="valueCapital"
                       type="string"
                       value= {this.state.valueCapital}
                       onChange={this.onChange}/>

                <button>Click</button>

            </form>
        )
    }
}

export default Form;
