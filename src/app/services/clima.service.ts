import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clima } from '../interfaces/clima.interface';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  /* api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */

  url:string = "https://api.openweathermap.org/data/2.5/weather?";
  key:string = '786d15306986fa8cd1c0c1f4d2d73f2a';

  constructor(private http:HttpClient) { }


  getClima(ciudad:string):Observable<Clima>{
    return this.http.get<Clima>(this.url+'q='+ciudad+"&lang=es"+'&appid='+this.key);
  }
}
