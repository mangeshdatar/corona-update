import React from 'react'

import { Card, Chart, CountryPicker } from './components/component';
import { covidAPI} from './api/api'
import styles from './App.module.css'
class App extends React.Component {
    state = {
        data: {},
        conytry:''
    }
    async  componentDidMount() {
      const fetchData = await covidAPI();
        this.setState({
            data:fetchData
        })
        
    }
    handleCountrySelect = async (country) => {
        const fetchData = await covidAPI(country);
        this.setState({
            data: fetchData,
            country:country
        })
    }
    render() {
      const  {data , country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png"/> 
                <Card data={data} />
                <CountryPicker  handleCountrySelect={this.handleCountrySelect} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;