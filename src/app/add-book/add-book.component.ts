import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  form:any;
  submitted = false;
  type:any
  softcopyy!:File
  constructor(private service: CrudService,private formBuilder : FormBuilder,private router:Router) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      book_type:[this.type, Validators.required],
      account_number:['', Validators.required],
      book_title:['', Validators.required],
      book_author:['', [Validators.required]],
      book_publisher:['',[Validators.required]],
      bill_number: ['', [Validators.required]], 
      book_price:['', [Validators.required]], 
      ISBN_number:['', [Validators.required]], 
      remarks: ['', [Validators.required]], 
      softcopy:[this.softcopyy,[Validators.required]]

  })

  }
  addbook(){
    console.log("hello");
    this.service.AddBook(this.form.value).subscribe(res=>{

      console.log("data is add",this.form.value);
    })

  
  }
  changebook(e:any){
    this.type=e.target.value

    console.log(e.target.value);

  }
  onChange(event:any) {
    this.softcopyy = event.target.files[0];
     
}
  get f() {
    return this.form.controls;
  }
}
