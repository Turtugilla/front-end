import { Component, Input, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-detalles-auto',
  templateUrl: './modal-detalles-auto.component.html',
  styleUrls: ['./modal-detalles-auto.component.css']
})
export class ModalDetallesAutoComponent implements OnInit {

  autoSeleccionado: Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
