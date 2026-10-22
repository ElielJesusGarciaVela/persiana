import { Component, input, output, SimpleChanges } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent {
  persianaInput = input<String>();

  persianaOutput = output<String>();

  corrienteHabitacion = input<boolean>();

  habitacionInput = input<boolean>();

  onPersianaCambioEstado(estado: String) {
    this.persianaOutput.emit(estado);
  }

  // onCambioEstadoPersiana(estado: String){
  //   this.persianaOutput = estado
  // }
}
