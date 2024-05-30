import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faTrash, faTrashCan, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'form-process',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent, FontAwesomeModule],
  templateUrl: './form-process.component.html',
  styleUrl: './form-process.component.scss'
})
export class FormProcessComponent implements OnInit {
  processForm!: FormGroup;
  isVisible: boolean = false;
  trash = faTrashCan

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.processForm = this.formBuilder.group({
      number: ['', Validators.required],
      parties: this.formBuilder.group({
        plaintiff: ['', Validators.required],
        defendant: ['', Validators.required]
      }),
      court: ['', Validators.required],
      bench: ['', Validators.required],
      natureOfAction: ['', Validators.required],
      description: [''],
      progress: this.formBuilder.array([]),
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
    console.log("Ola");
  }

  closeModal() {
    this.isVisible = false;
  }

  ngSubmit() {}

}
