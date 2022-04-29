import { Component, OnInit } from '@angular/core';
import {VehiculoService} from "../service/vehiculo.service";
import {Vehiculo} from "../model/vehiculo";

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  renaultCount: number = 0;
  chevroletCount: number = 0;
  nissanCount: number = 0;

  constructor(private vehiculoService: VehiculoService) { }

  getCountVehiculos(vehiculos: Array<Vehiculo>): void{
    vehiculos.forEach((vehiculo) =>{
      if(vehiculo.marca.toUpperCase().indexOf("RENAULT") > -1){
        this.renaultCount++;
      }else if(vehiculo.marca.toUpperCase().indexOf("CHEVROLET") > -1){
        this.chevroletCount++;
      }else if(vehiculo.marca.toUpperCase().indexOf("NISSAN") > -1){
        this.nissanCount++;
      }
    })
  }
  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.getCountVehiculos(vehiculos);
    });
  }

  ngOnInit(): void {
    this.getVehiculos();
  }

}
