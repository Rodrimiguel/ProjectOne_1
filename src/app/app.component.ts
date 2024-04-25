import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HijoComponent } from './componentes/hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clasedos';

  nombre: String = "Javier";
  numero = 152;
  numero1 = 1123123;
  resultado = 3333;
  //atajo para identar el codigo : alt + shift + "f"
  datos: any = {
    nombre: "Javier",
    apellido: "Bardem",
    edad: 28,
    documento: "25123654"
  }

}