import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { PersianaComponent } from './components/habitacion/persiana/persiana.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent, PersianaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'persiana';

  corrienteVivienda = false;

  habitacionHabilitada = false;

  estadoPersiana: String = '';

  //eventos-dom
  onConcetarDesconectar(event: Event){
    let conDes = event.target as HTMLButtonElement;
    
    this.corrienteVivienda = !this.corrienteVivienda;
    conDes.innerText = this.corrienteVivienda ? 'Desconectar' : 'Conectar'
  }

  onHabilitarDeshabilitar(event: Event){
    let habDes = event.target as HTMLButtonElement;
    
    this.habitacionHabilitada = !this.habitacionHabilitada;
    habDes.innerText = this.habitacionHabilitada ? 'Deshabilitar' : 'Habilitar';
  }

  onCambioEstadoPersiana(estado: String){
    this.estadoPersiana = estado
  }
}
