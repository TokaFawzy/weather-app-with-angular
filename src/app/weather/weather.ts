import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ApiService } from '../api-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule,CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  private cdr = inject(ChangeDetectorRef);
  today=new Date();
  weatherInfo=inject(ApiService);
  search='';
  weatherData:any;
  forceData:any;
  loadWeather(){
    if (!this.search.trim()) return;
    this.weatherInfo.getWeather(this.search).subscribe({
      next:(data)=>{
        this.weatherData=data
        this.weatherInfo.getForecast(this.search).subscribe({
        next:(data)=>{
          this.forceData=data;
          this.search = '';
          this.cdr.detectChanges();
        }
        })
        this.cdr.detectChanges();
    },error:(err)=>{
      alert(`City Not Found`)
          this.search = '';
    }
    })

  }
}
