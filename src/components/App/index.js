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

    onChange = (valueName) => {

        this.setState((state) => ({
            countryList: [{
                countryName: valueName,
                leaderName: "defaultName",
                leaderPost: "defaultName",
                capital: "defaultName"

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
