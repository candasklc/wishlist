import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DashiData } from 'src/app/interfaces/dashi-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  wishListOfDashi: DashiData[];
  wishListOfDjuli = ['first', 'second', 'third'];

  dashiInput = '';
  djuliInput = '';

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.getLists();
  }

  submitDashi(): void{
    this.getLists();
  }

  submitDjuli(): void{
    console.log('Djuli clicked');
  }

  getLists(): void{
    this.dataProvider.getList()
    .subscribe((data: DashiData[]) => {
      this.wishListOfDashi = data;
    });
  }

}
