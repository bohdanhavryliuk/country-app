import { Component } from 'react';


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

        this.props.onChange(this.state.value);
        //this.props.onChange(this.state.valueLeader);


    }

    onChange = (e) => {

        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
        /*this.setState({
            value: e.target.value

        })*/
    }

    onChange2 = (e) => {

        this.setState({
            valueLeader: e.target.value

        })
    }



    render() {
        return(
            <form onSubmit={this.onSubmit}>


                <input name="value"
                type="string"
                value= {this.state.value}
                onChange={this.onChange}/>
                <input name="valueLeader"
                       type="string"
                       value= {this.state.valueLeader}
                       onChange={this.onChange}/>
                <button>Click</button>
            </form>
        )
    }
}

export default Form;
