import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data';

@Component({
  selector: 'app-update-view-djuli',
  templateUrl: './update-view-djuli.component.html',
  styleUrls: ['./update-view-djuli.component.scss']
})
export class UpdateViewDjuliComponent implements OnInit {
  @Input() wishListOfDjuli: Data[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
