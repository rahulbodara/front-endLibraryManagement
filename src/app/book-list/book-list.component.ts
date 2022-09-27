import { UpdateBookComponent } from './../update-book/update-book.component';
import { CrudService } from '../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';
import { ShowbookdataComponent } from '../showbookdata/showbookdata.component';
export interface PeriodicElement {
  id: number;
  book_title: string;
  account_number: string;
  book_publisher: string;
  book_author: string;
  ISBN_number: number;

}
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'account_number', 'book_title', 'book_publisher', 'book_author', 'ISBN_number', 'Action'];
  public dataSource: MatTableDataSource<any>;
  // data: any
  BooklistDetails: any
  isshowthree: boolean = false
  isshowfour: boolean = false
  constructor(private service: CrudService,private dialog: MatDialog) {
this.dataSource = new MatTableDataSource
   }

  ngOnInit(): void {
    this.listbook()
  }
  listbook() {
    console.log("test-------------------<>");

    this.service.getBooks().subscribe((result) => {
      this.BooklistDetails = result
      this.dataSource = this.BooklistDetails

      console.log("result-------------------->", result);

    })
  }
  openDialog(Data:any) {
    const dialogRef = this.dialog.open(ShowbookdataComponent, {
      data: Data
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  openDialog1(Data:any) {
    const dialogRef = this.dialog.open(UpdateBookComponent, {
      data: Data
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  openDialogfour(){
    this.isshowfour=! this.isshowfour
  this.isshowthree  = false

    window.location.reload
  }

  deletebok(id:any){
this.service.delete(id).subscribe(res=>{
  this.isshowthree  = true
})
  }
}
