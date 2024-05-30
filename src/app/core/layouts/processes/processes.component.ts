import { Component } from '@angular/core';
import { FormProcessComponent } from './components/form-process/form-process.component';

@Component({
  selector: 'app-processes',
  standalone: true,
  imports: [FormProcessComponent],
  templateUrl: './processes.component.html',
  styleUrl: './processes.component.scss'
})
export class ProcessesComponent {

}
