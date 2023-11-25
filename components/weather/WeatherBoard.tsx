import styles from '../../styles/components/weather/WeatherBoard.module.scss'
import WeatherCard from './WeatherCard'
import WeatherBar from './WeatherBar'

export default function WeatherBoard() {
  return (
    <div className={styles.board_Container}>
      board
      <span className={styles.currDate}>11/10/2023</span>
      <div className={styles.curr_container}>
        <div className={styles.curr_weather}>
          <h3>Current Weather</h3>
          <div className={styles.curr_details}>
            <div>
              <h4>City</h4>
              <span>TODAY 11 OCT</span>
            </div>
            <div>
              <h4>7°C</h4>
              <span>Cloudy</span>
            </div>
            <div>PNG</div>
          </div>
        </div>

        <div className={styles.curr_condition}>
          
        </div>

        <div className={styles.curr_hourly}>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
      <div className={styles.week_container}>
        <WeatherBar />
        <WeatherBar />
        <WeatherBar />
        <WeatherBar />
      </div>

    </div>
  )
}
