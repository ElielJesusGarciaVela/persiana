import { Component, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {

  persianaEstado = false;

  persianaOutput = output<String>();

  onClickSubirBajar(event: Event){
    let subBaj = event.target as HTMLButtonElement

    this.persianaEstado = !this.persianaEstado;
    subBaj.innerText = this.persianaEstado ? 'Bajar' : 'Subir'

    this.persianaOutput.emit(this.persianaEstado ? 'PERSIANA SUBIDA' : 'PERSIANA BAJADA')
  }

}
