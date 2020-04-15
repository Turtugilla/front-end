import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';
import { AutosService } from 'src/app/autos.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  // Agregar o Editar
  accion: string;

  auto: Automovil = {} as Automovil;
  desde: number;
  hasta: number;
  modelos: number[] = [this.desde, this.hasta];


  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    if (this.accion === 'Editar') {
      let lengthModelos: number = this.auto.modelos.length;
      this.desde = this.auto.modelos[0];
      this.hasta = this.auto.modelos[lengthModelos - 1];
    } else if (this.accion === 'Agregar') {
      this.desde = 2000;
      this.hasta = 2020;
    }
  }


  onSubmit(formAutos) {
    let modelos: number[] = this.ensamblajeModelos();
    this.auto.modelos = modelos;
    this.activeModal.close(this.auto);
  }


  private ensamblajeModelos(): number[] {
    let modelos: number[];
    modelos = [];



    for (let cont = this.desde; cont <= this.hasta; cont++) {
      modelos.push(cont);
    }
    return modelos;

  }
}







