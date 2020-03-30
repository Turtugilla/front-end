import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modals/modal-confirm-action/modal-confirm-action.component';
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
  constructor(private autosService: AutosService, private modalService: NgbModal) { }


  ngOnInit() {
    this.pageSize = 10;
    this.page = 1;
    this.autosService.getAutos().subscribe((response) => {
      this.autos = response.data;
    })
  }


  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autosService.updateAutos(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason)
      }
    );
  }


  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto) => {
        this.autosService.addAuto(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason)
      }
    );
  }

  openModalConfirmarEliminar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true })
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autosService.deleteAuto(autoTemp).subscribe(response => {
          console.log("Respuesta cuando se termina de eliminar un auto")
          console.log(response)
        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }





}
