import WeatherBoard  from "../../components/weather/WeatherBoard"
import GlobalWeather from "../../components/weather/WeatherSide"

export default function weather () {
  return (
    <div>
      Weather Page
      <div>
        <WeatherBoard/>
        <GlobalWeather/>
      </div>
    </div>
  )
}