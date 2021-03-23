import { CurrentWeatherData } from './../models/current-weather-data.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Accessory } from '../models/accessory.model';
import { Astronomy } from '../models/astronomy.model';
import { WeatherAlert2 } from '../models/weatherAlert2.model';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent implements OnInit {

  currentWeather: CurrentWeatherData;
  airQualityAndWeather: CurrentWeatherData;
  astronomy: Astronomy;
  alert: WeatherAlert2;
  accessories: Accessory[] = [];

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentWeatherData();
    this.getWeatherAndAirQuality();
    this.getAstronomyData();
    this.getWeatherAlerts();
  }

  getWeatherAlerts(){
    this.weatherService.getWeatherAlerts().subscribe((response) =>{
      this.alert = response.body.alerts,
        console.log(this.alert)
    }
    )
  }

  getAstronomyData(){
    this.weatherService.getAstronomyData().subscribe((response) =>{
      this.astronomy = response.body.astronomy,
        console.log(this.astronomy)
    }
    )
   }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData().subscribe((response) => {
      this.currentWeather = response.body,
        console.log(this.currentWeather)
    }
    )
  }

  getWeatherAndAirQuality() {
    this.weatherService.getWeatherAndAirQuality().subscribe((response) => {
      this.airQualityAndWeather = response.body,
        console.log(this.airQualityAndWeather)
    }
    )
  }

}
