import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  //@input me permite recibir el atributo desde el componente padre
  @Input("propiedadhijo") datohijo: any;

  constructor() {
    
  }


}
