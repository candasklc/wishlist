import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-update-view',
  templateUrl: './update-view.component.html',
  styleUrls: ['./update-view.component.scss']
})
export class UpdateViewComponent implements OnInit {
  @Input() wishListOfDashi: Data[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
