import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  pageSize: number;
  page: number;
  constructor(private autosService: AutosService) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.autosService.getAutos().subscribe(response => {
      this.autos = response.data;
    })
  }

  mandarDataHijo(auto) {
    this.autoSeleccionado = auto;
  }

}
