import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthorService } from './shared/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'forms-example';
  /**
   *
   */
  constructor(
    private authorService: AuthorService,
    private fb: NonNullableFormBuilder
  ) {}
  searchText: string = '';
  formValues = {
    userName: 'surendra@gmail.com',
    password: '1234567890',
    // Add default values for other fields as needed
  };
  defaultFormValues = JSON.stringify(this.formValues);
  submitForm(form: NgForm, event: Event) {
    event.preventDefault();
    console.log(form);
    console.log(this.defaultFormValues);
  }
  resetForm(form: NgForm) {
    //form.resetForm();
    form.resetForm(JSON.parse(this.defaultFormValues));
    console.log('Reset');
  }

  formR = this.fb.group({
    userNameR: [
      'surendra@gmail.com',
      {
        validators: [
          Validators.required,
          Validators.email,
          Validators.minLength(10),
        ],
        updateOn: 'change',
      },
    ],
    passwordR: [
      '1234567890',
      {
        validators: [Validators.required, Validators.minLength(10)],
        updateOn: 'change',
      },
    ],
  });
  submitFormR() {}
  resetFormR() {
    this.formR.reset();
  }
}
