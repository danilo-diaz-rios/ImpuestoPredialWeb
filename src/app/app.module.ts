import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialComponentsDefinitionModule} from '../app/material-components-definition/material-components-definition.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routing/routing';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ExternalRegisterComponent } from './external-register/external-register.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AuthGuard } from './guard/AuthGuard';
import { LoginGuard } from './guard/LoginGuard';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { MasterComponent } from './master/master.component';
import { MandamientoComponent } from './mandamiento/mandamiento.component';
import { MandamientoPagoComponent } from './mandamiento-pago/mandamiento-pago.component';
import { NotificacionCorrespondenciaComponent } from './notificacion-correspondencia/notificacion-correspondencia.component';
import { NotificacionEmbargoComponent } from './notificacion-embargo/notificacion-embargo.component';
import { NotificacionMensajeriaComponent } from './notificacion-mensajeria/notificacion-mensajeria.component';
import { SolicitudAbogadoComponent } from './solicitud-abogado/solicitud-abogado.component';
import { ArchivoDeterminadoComponent } from './archivo-determinado/archivo-determinado.component';
import { ResolucionVigenteComponent } from './resolucion-vigente/resolucion-vigente.component';
import { ResolucionConvenioPagoComponent } from './resolucion-convenio-pago/resolucion-convenio-pago.component';
import { MandamientoDialogComponent } from './dialog/mandamiento-dialog/mandamiento-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExternalRegisterComponent,
    ForgottenPasswordComponent,
    HomeDashboardComponent,
    AboutComponent,
    SettingsComponent,
    MasterComponent,
    MandamientoComponent,
    MandamientoPagoComponent,
    NotificacionCorrespondenciaComponent,
    NotificacionEmbargoComponent,
    NotificacionMensajeriaComponent,
    SolicitudAbogadoComponent,
    ArchivoDeterminadoComponent,
    ResolucionVigenteComponent,
    ResolucionConvenioPagoComponent,
    MandamientoDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsDefinitionModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [
    MandamientoDialogComponent

  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
