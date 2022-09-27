import { CrudService } from './../service/crud.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  isshowfour: boolean = false
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service:CrudService) { }

  ngOnInit(): void {

  }

updatedetials(){
  const update={
    id:this.data.id,
    book_type:this.data.book_type,
    account_number:this.data.account_number,
    book_title:this.data.book_title,
    book_author:this.data.book_author,
    book_publisher:this.data.book_publisher,
    bill_number:this.data.bill_number,
    book_price:this.data.book_price,
    ISBN_number:this.data.ISBN_number,
    remarks:this.data.remarks,
   softcopy:this.data.softcopy
  }
  console.log("update",update);
  
  this.service.updatebook(update,this.data.id).subscribe(res=>{
    console.log("ress",res);
    
    this.isshowfour = true

  })
}

}
