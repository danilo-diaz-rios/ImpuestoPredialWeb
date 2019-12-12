import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavModel } from '../model/NavModel';
import { AppService } from '../app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private appService: AppService) {}

  navModel;


  ngOnInit() {
    const user = 'Admin';
    switch (user) {
      case 'Admin':
        this.navModel = [
         // new NavModel('/home/dashboard', 'Inicio', 'home'),
          new NavModel('/home/archivo-determinado', 'Respuesta de Archivo de Determinación', 'account_circle'),
          new NavModel('/home/mandamientos', 'Mandamientos', 'account_circle'),
          new NavModel('/home/mandamientos-pago', 'Mandamientos de Pago', 'account_circle'),
          new NavModel('/home/notificacion-correspondencia', 'Notificación por Correo', 'account_circle'),
          new NavModel('/home/notificacion-embargo', 'Notificación de Embargo', 'account_circle'),
          new NavModel('/home/notificacion-mensajeria', 'Notificación de Mensajería', 'account_circle'),
          new NavModel('/home/resolucion-vigente', 'Resolución Vigente', 'account_circle'),
          new NavModel('/home/resolucion-convenio-pago', 'Resolución de Convenio de Pago', 'account_circle'),
          new NavModel('/home/solicitud-abogado', 'Solicitud Abogado', 'account_circle'),
         // new NavModel('/home/about', 'Acerca de', 'help'),
        ];
        break;

      default:
        this.navModel = [
          new NavModel('/dashboard', 'Home', 'home'),

        ];
        break;

    }
  }

  logout(): void {
      localStorage.removeItem('JWT');
      this.router.navigate(['login']);
    }

    navigateTo(link) {
      this.router.navigate([link]);
    }

  getInfoFromToken() {
    // let loggedInUser: UserModel;
    // this.appService.getUserData().subscribe(res => {
    //   this.showLoadingBar = false;

    //   loggedInUser = res.message;
    //   this.currentUser = loggedInUser;


    // }, err => {
    //   console.log(err);
    // });

  }
}
