import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { FormComponent } from '../form/form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{


  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'date',
  'status', 'aspect', 'prodName', 'price', 'action',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _prodService: ItemService,
    private _coreService: CoreService,
    ) {}

    ngOnInit(): void {
      this.getProductList();
    }

  openAndEditProdForm() {
    const dialogRef = this._dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductList();
        }
      },
    });
  }

  getProductList() {
    this._prodService.getProductList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id:number) {
    this._prodService.deleteProduct(id).subscribe({
        next: (res) => {
          this._coreService.openSnackBar('Product deleted!', 'done');
          this.getProductList();
        },
        error: (err) => {
          console.log(err);
        },
    });  
  }

  openEditForm(data:any) {
    const dialogRef = this._dialog.open(FormComponent, {
      data: data
    });
    
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductList();
        }
      },
    });
  }
    
  }
 




