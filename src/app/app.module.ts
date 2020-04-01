import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewsComponent } from './views/views.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModalDetallesAutoComponent } from './modal-detalles-auto/modal-detalles-auto.component';
import { ModalAddUpdateComponent } from './modals/modal-add-update/modal-add-update.component';
import { FormsModule } from '@angular/forms';
import { ModalConfirmActionComponent } from './modals/modal-confirm-action/modal-confirm-action.component';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { LogComponent } from './log/log.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewsComponent,
    ListComponent,
    TableComponent,
    InicioComponent,
    ModalDetallesAutoComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    FormatoModelosPipe,
    LogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetallesAutoComponent, ModalAddUpdateComponent, ModalConfirmActionComponent]
})
export class AppModule { }
