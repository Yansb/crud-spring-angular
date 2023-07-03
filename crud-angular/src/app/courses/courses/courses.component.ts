import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, delay, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  styleUrls: ['./courses.component.scss'],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(() => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
