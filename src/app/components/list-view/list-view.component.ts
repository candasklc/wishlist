import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  wishListOfDashi = ['first','second','third']
  wishListOfDjuli = ['first','second','third']
  

  constructor() { }

  ngOnInit(): void {
  }
}
