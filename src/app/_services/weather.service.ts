import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  appId = '30c0e73575c3d6bf8535ba35f116906b';

  constructor(private http: HttpClient) { }

  getWeather(query: string) {
    return this.http.get(this.weatherUrl + '?q=' + query +
      '&appid=' + this.appId);
  }
}
