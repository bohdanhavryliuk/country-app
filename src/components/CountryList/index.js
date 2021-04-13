import Country from "../Country";
import './style.css'

const CountryList = (props) => (
    <div className="countrylist">
        {
            props.countryList.map((country) => (
                <Country country = {country} />
            ))
        }
    </div>
)

export default CountryList;
