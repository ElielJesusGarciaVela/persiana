import { Component, input, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent {
  persianaInput = input<String>();

  estadoPersianaOutput = output<string>();

  corrienteHabitacion = input<boolean>();

  habitacionInput = input<boolean>();

  onPersianaCambioEstado(estado: string) {
    this.estadoPersianaOutput.emit(estado);
  }

  // onCambioEstadoPersiana(estado: String){
  //   this.persianaOutput = estado
  // }
}
