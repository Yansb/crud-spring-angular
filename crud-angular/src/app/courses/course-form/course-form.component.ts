import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError(),
    });
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Error ao salvar curso', '', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso', '', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    this.onCancel();
  }
}
