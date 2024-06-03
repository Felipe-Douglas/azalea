import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'form-process',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent, ButtonComponent, HttpClientModule],
  templateUrl: './form-process.component.html',
  styleUrl: './form-process.component.scss'
})
export class FormProcessComponent implements OnInit {
  processForm!: FormGroup;
  progressOptions: string[] = ['Iniciado', 'Em Progresso', 'Concluído'];

  isVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.processForm = this.formBuilder.group({
      number: ['', Validators.required],
      parties: this.formBuilder.group({
        plaintiff: ['', Validators.required],
        plaintiffId: ['', Validators.required],
        defendant: ['', Validators.required],
        lawyerOAB: ['', Validators.required]
      }),
      court: ['', Validators.required],
      bench: ['', Validators.required],
      // natureOfAction: ['', Validators.required],
      description: [''],
      progress: ['', Validators.required],
      documents: this.formBuilder.array([]),
      deadlines: this.formBuilder.array([]),
      tags: this.formBuilder.array([])
    });
  }

  addItem(arrayName: string): void {
    const array = this.processForm.get(arrayName) as FormArray;
    array.push(this.formBuilder.control(''));
  }

  removeItem(arrayName: string, index: number): void {
    const array = this.processForm.get(arrayName) as FormArray;
    array.removeAt(index);
  }

  getArrayControls(arrayName: string): any[] {
    return (this.processForm.get(arrayName) as FormArray).controls;
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  onKeyPress(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^[0-9]*$/.test(keyValue) && allowedKeys.indexOf(event.key) === -1) {
      event.preventDefault();
    }
  }

  ngSubmit() {
    if (this.processForm.valid) {
      this.dataService.postData(this.processForm.value, "/process").subscribe(
        res => {
          console.log('Form submitted successfully', res);
        },
        err => {
          console.error('Error submitting form', err);
        }
      );
    } else {
      console.error("Error");
    }
  }

}
