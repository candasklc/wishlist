import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Data } from 'src/app/interfaces/data';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  dashiUrl = 'https://candasklc.github.io/lists/dashiList.json';
  djuliUrl = '../../assets/djuliWishlist.json';

  wishListOfDashi: Data[];
  wishListOfDjuli: Data[];

  dashiInput: Data;
  djuliInput = '';

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.getDashiLists(this.dashiUrl);
    this.getDjuliLists(this.djuliUrl);
  }

  submitDashi(): void{
    this.addItem(this.dashiInput);
    this.getDashiLists(this.dashiUrl);
  }

  submitDjuli(): void{
    this.getDjuliLists(this.djuliUrl);
  }

  getDashiLists(url: string): void{
    this.dataProvider.getList(url)
    .subscribe((data: Data[]) => {
      this.wishListOfDashi = data;
    });
  }

  getDjuliLists(url: string): void{
    this.dataProvider.getList(url)
    .subscribe((data: Data[]) => {
      this.wishListOfDjuli = data;
    });
  }

  addItem(item: Data): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(item).subscribe(item => {
      this.wishListOfDashi.push(item);
    });
  }
}
