import { Input, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';
import { UserService } from '../user-service.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginForm {
  public error: string | null = null;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  submit() {
    if (this.form.valid) {
      this.userService
          .login(this.form.get("email")?.value, this.form.get("password")?.value)
          .pipe(
              catchError(error => {
                  if (error.error instanceof ErrorEvent) {
                      this.error = `Error: ${error.error.message}`;
                  } else {
                      this.error = `Error: ${error.message}`;
                  }
                  return of(null);
              })
          ).subscribe((result) => {
            if(result) {
              this.router.navigate(['/files']);
            }
          });
    } else {
      this.error = "Invalid form";
    }
  }

}

