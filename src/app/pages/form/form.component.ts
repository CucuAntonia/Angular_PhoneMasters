import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  aspect: string[] = [
    'As New',
    'Very Good',
    'Good',
    'Bad',
    'Very Bad',
  ];
  
  constructor(private _fb: FormBuilder, 
    private _item:ItemService, 
    private _dialogRef:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    ) {
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

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
  onFormSubmit() {
    if(this.form.valid) {
      if(this.data) {
        this._item.updateProduct(this.data.id, this.form.value).subscribe({
          next: (val:any) => {
            this._coreService.openSnackBar('Product updated succesfully');

            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.error(err);
          },
        });
      } else {
        this._item.addProduct(this.form.value).subscribe({
          next: (val:any) => {
            this._coreService.openSnackBar('Product added succesfully');

            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.error(err);
          },
        });
      }
      
  }
}
}


