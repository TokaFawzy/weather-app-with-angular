import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http=inject(HttpClient)
  private apiKey = '090414ecbc82db40ed39f868f3340b6e';
  getWeather(city:string){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    return this.http.get(url);
  }
  getForecast(city:string){
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric`
    return this.http.get(url);
  }
}
