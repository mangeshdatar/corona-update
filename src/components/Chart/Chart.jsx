import React from 'react'
import { dailyReport } from '../../api/api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
import {Grid} from '@material-ui/core'
class Chart extends React.Component {
    state = {
        dailyData : []
   }

   async  componentDidMount() {
      const fetchApi = await dailyReport()
          this.setState({
            dailyData:fetchApi
          })
       
  }
   
  render(){
    const lineChart =  (
        this.state.dailyData.length ? (
          <div className={styles.test}>
                <Line
                
                data={{
                    labels: this.state.dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: this.state.dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        },
                        {
                            data: this.state.dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,.5)',
                            fill: true
                        }]
                    }}
                />
                </div>
         )
                : null
        )
      const { data: {confirmed, recovered, deaths} } = this.props;
      const barChart = (
          confirmed ?
       
              <Bar
                  data={{
                      labels: ['Infected', 'Recovered', 'Deaths'],
                      datasets: [{
                          label: 'People',
                          backgroundColor: [
                            'rgba(0, 0, 255, .5)',
                            'rgba(0, 255,0, .5)',
                            'rgba(255, 0, 0, .5)'
                          ],
                          data:[confirmed.value , recovered.value, deaths.value]
                      }]
                  }}
                  options={{
                      legend: { display: false },
                      title :{display:true, text:`Current status in ${this.props.country}`}
                          }} /> 
           : null
          )
        return (
        <div className={styles.container}>
            {this.props.country!==undefined  && this.props.country !== "" ?  barChart:lineChart}
        </div>
    )
}
}
export default Chart;
