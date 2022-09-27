import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private routr:Router) { }

  ngOnInit(): void {
  }
  goto(){
    this.routr.navigateByUrl('book-list')
  }
}
