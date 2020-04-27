import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountries } from '../../api/api'
import styles from './Country.module.css'
class CountyPicker extends React.Component {
    state = {
        countries : []
    }
    async componentDidMount() {
     const getCountry = await  getCountries()
        this.setState({
            countries : getCountry
        })
    }
    render() {
       
    
        return (
            <FormControl className={styles.formControl} >
                <NativeSelect defaultValue="" onChange={(e)=> this.props.handleCountrySelect(e.target.value)}>
                
                    <option value="">Global</option>
                    {this.state.countries.map((contry,i) => <option key={i} value={contry}>{contry}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}

export default CountyPicker