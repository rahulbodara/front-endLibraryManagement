import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-showbookdata',
  templateUrl: './showbookdata.component.html',
  styleUrls: ['./showbookdata.component.css']
})
export class ShowbookdataComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
