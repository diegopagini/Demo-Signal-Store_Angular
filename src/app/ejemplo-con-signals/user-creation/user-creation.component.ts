import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContainer,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [
    MatDialogContainer,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatInput,
    MatFormField,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './user-creation.component.html',
  styleUrl: './user-creation.component.scss'
})
export class UserCreationWithSignalsComponent {
  public dialogRef = inject(MatDialogRef);

  public form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required)
  });

  public close(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    this.dialogRef.close({
      ...this.form.value,
      id: Math.random().toString()
    });
  }
}
