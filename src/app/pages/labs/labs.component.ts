import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  wellcome = 'Wellcome!';
  tasks = signal(['Iniciar proyecto', 'Instalar componentes', 'Arrancar proyecto']);

  name = signal('pepito');

  colorCtrl = new FormControl;

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log('value :>> ', value);
    })
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
}
