import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent //implements OnInit
{
  form: FormGroup;
  aspect: string[] = [
    'As New',
    'Very Good',
    'Good',
    'Bad',
    'Very Bad',
  ];
  
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      status: '',
      aspect: '',
      prodName: '',
      price: '',

    });
  }
  onFormSubmit() {
    if(this.form.valid)
      console.log(this.form.value);
  }
  // constructor(public dialogRef: MatDialogRef<FormComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: string[], private formBuilder: FormBuilder) { }
  

  // ngOnInit(): void {
  //     this.createForm();
  // }

  // private createForm(): void {
  //   this.form = this.formBuilder.group({
  //     name:[null],
  //     descriere:[null],
  //     cantitate:[null]
  //   });
  // }

  // private addItem() {
    
  // }

  // private updateItem(item: Item): void {
  //   this.itemService
  //   window.location.reload();
  // (err: string) => {
  //   this.error = err;
  // }
  // }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}


