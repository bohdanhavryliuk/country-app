import './style.css'

const Country = (props) => {
    return (
        <div className="country">
            <p>Назва: {props.country.countryName}</p>
            <p>Ім'я лідера: {props.country.leaderName}</p>
            <p>Посада лідера: {props.country.leaderPost}</p>
            <p>Столиця: {props.country.capital}</p>
        </div>
    )
}

export default Country;
