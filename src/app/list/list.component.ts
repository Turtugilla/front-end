import { Component, OnInit, TemplateRef } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';
import { ModalDetallesAutoComponent } from '../modal-detalles-auto/modal-detalles-auto.component';
import { AutosService } from '../autos.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];


  closeResult = '';
  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {

    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
    })



  }


  open(auto: Automovil) {
    const modalRef = this.modalService.open(ModalDetallesAutoComponent, { centered: true });
    modalRef.componentInstance.autoSeleccionado = auto;
  }


}
