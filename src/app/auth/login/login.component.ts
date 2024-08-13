import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


export interface AuthenticationResult {
  IsSuccessful: boolean;
  Token?: string;
  IsAccountActivated: boolean;
}


export function passwordComplexityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    if (!/[A-Z]/.test(value)) {
      return { hasUpperCase: true };
    }
    if (!/[a-z]/.test(value)) {
      return { hasLowerCase: true };
    }
    if (!/\d/.test(value)) {
      return { hasNumber: true };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return { hasSpecialCharacter: true };
    }
    if (/\s/.test(value)) {
      return { hasSpace: true };
    }
    return null;
  };
}
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.(com|in|net|org|edu|gov|mil|biz|info|io|co)$/;


    if (control.value === '') {
      return null; 
    }

  
    if (!emailRegex.test(control.value)) {
      return { email: true };
    }

    return null;
  };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
hide: boolean=true;
loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, 
     private authService: AuthService, private toast:ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8), passwordComplexityValidator()]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      // next: (response) => {
      //   console.log('API Response:', response);

 
      //   if (response.success === true) {
      //     this.toast.success("Login Successful");

     
      //     localStorage.setItem('role', response.role);

        
      //     if (response.role === 'Doctor') {
      //       this.router.navigate(['/doctor/dashboard']);
      //     } else if (response.role === 'Patient') {
      //       this.router.navigate(['/patient/dashboard']);
      //     } else {
      //       this.router.navigate(['/']);
      //     }
      //   } else {
      //     this.toast.error('Login failed');
      //   }
      // },
      // error: (err) => {
      //   // console.error('API Error:', err);
      //   this.toast.error('An error occurred');
      // }
      next: (response) => {
        if (response.success) {
          this.toast.success(response.message);

          if (response.role === 'Doctor') {
            this.authService.authorizeZoom().subscribe({
              next: (res: any) => {
                // Redirect to Zoom authorization URL
                window.location.href = res.res;
              },
              error: (err) => {
                this.toast.error('Zoom authorization failed');
              }
            });
          } else {
           
            this.router.navigate(['/patient/dashboard']);
          }
        } else {
          this.toast.error('Login failed');
        }
      },
      error: (err) => {
        this.toast.error('An error occurred');
      }
    });
  }
  

}


