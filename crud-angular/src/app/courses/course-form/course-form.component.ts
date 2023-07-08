import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;
  categories = [
    { value: null, label: '' },
    { value: 'back-end', label: 'Back-end' },
    { value: 'front-end', label: 'Front-end' },
    { value: 'dev-ops', label: 'Dev Ops' },
    { value: 'mobile', label: 'Mobile' },
  ];

  constructor(private formBuilder: FormBuilder, private service: CoursesService, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (result) => console.log(result),
      error: () => this.onError(),
    });
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }

  private onError() {
    this.snackBar.open('Error ao salvar curso', '', { duration: 5000 });
  }
}
