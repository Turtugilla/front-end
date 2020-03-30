import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
<<<<<<< Updated upstream
=======
import { AutosService } from '../autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modals/modal-confirm-action/modal-confirm-action.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
<<<<<<< Updated upstream
  constructor() { }
=======
  pageSize: number;
  page: number;
  constructor(private autosService: AutosService, private modalService: NgbModal) { }
>>>>>>> Stashed changes

  ngOnInit() {
    this.autos = AUTOMOVILES;
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
