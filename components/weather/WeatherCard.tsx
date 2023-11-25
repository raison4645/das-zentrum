import styles from '../../styles/components/weather/WeatherCard.module.css'


export default function WeatherCard() {
  return (
    <div className={styles.weatherCard_container}>
      <span>12:00</span>
      <div>PNG</div>
      <span>7°C</span>
    </div>
  )
}
