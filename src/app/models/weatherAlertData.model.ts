import { WeatherAlert2 } from "./weatherAlert2.model";

export interface WeatherAlertData{
    alerts: WeatherAlert2
}

export class WeatherAlertData{
    constructor(
        public alerts: WeatherAlert2
    ){}
}