import styles from '../../styles/components/weather/WeatherBoard.module.css'
import WeatherCard from './WeatherCard'
import WeatherBar from './WeatherBar'

export default function WeatherBoard() {
  return (
    <div className={styles.board_Container}>
      board
      <span className={styles.currentDate}></span>
      <div className={styles.weather_now}></div>

      <div className={styles.current_container}>
        <div className={styles.current_weather}></div>

        <div className={styles.current_air}></div>

        <div className={styles.current_hourly}>
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
