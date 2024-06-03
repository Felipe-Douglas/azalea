import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent implements OnInit {
  accessForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login();
    this.router.navigate([""]);
  }

  ngOnInit(): void {
    this.accessForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngSubmit() {
    if (this.accessForm.valid) {
      this.authService.login();
      this.router.navigate(["home"]);
    } else {
      console.log('Formulário inválido');
    }
  }

}
