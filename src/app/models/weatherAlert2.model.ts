import {Alert} from './alert.model';

export interface WeatherAlert2{
    alert: Alert[];
}

export class WeatherAlert2{
    constructor(
        public alert: Alert[]
    ){}
}