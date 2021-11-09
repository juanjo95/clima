import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { Clima } from '../interfaces/clima.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen:string = "https://cdn-icons-png.flaticon.com/512/1116/1116453.png";
  ciudad:string = '';

  query:boolean = false;

  temperatura:number = 0;
  humedad:number = 0;
  clima: string = '';
  pais: string = '';
  nombre_ciudad: string = '';

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  getWheater(){
    this.climaService.getClima(this.ciudad).subscribe( (data:Clima) => {
      this.query = true;

      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].description;
      this.nombre_ciudad = data.name;
      this.pais = data.sys.country;

      this.ciudad = '';
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La ciudad no existe'
      });
      this.ciudad = '';
    });

  }

}
