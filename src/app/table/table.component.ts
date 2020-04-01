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
  searchText;

  displayProgressBar: boolean;
  constructor(private autosService: AutosService, private modalService: NgbModal) {
  }


  ngOnInit() {
    this.displayProgressBar = true;
    this.pageSize = 10;
    this.page = +sessionStorage.getItem('currentPage');
    this.autosService.getAutos().subscribe((response) => {
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1500)

    })
  }



  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autosService.updateAutos(auto).subscribe(value => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
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
        this.autosService.addAuto(auto).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason)
      }
    );
  }

  openModalConfirmarEliminar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true })
    modalRef.componentInstance.auto = auto;
    // Este método de result es la Promise 
    modalRef.result.then(
      (autoTemp) => {
        this.autosService.deleteAuto(autoTemp).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }





}
