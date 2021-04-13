import { Component } from "react"
import Form from "../Form";
import CountryList from "../CountryList";
import countries from "../../countries";

class App extends Component {

    constructor() {
        super();

        this.state = {
            countryList : countries
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (valueName, valueLeader, valueLeaderPost, valueCapital) => {

        this.setState((state) => ({
            countryList: [{
                countryName: valueName,
                leaderName: valueLeader,
                leaderPost: valueLeaderPost,
                capital: valueCapital

            }, ...state.countryList]
        }))
    }


/*

    addCountry = () => {
        this.setState((state) => ({
                countryList: [{
                    countryName: "defaultName"
                }, ...state.countryList]
            }))
    }
*/
    render() {
        return (
            <>
                <Form onChange={this.onChange}/>
                <CountryList countryList={this.state.countryList}/>
            </>
        )
    }
}

export default App;
