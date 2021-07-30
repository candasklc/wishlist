import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Data } from 'src/app/interfaces/data';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  dashiUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4/latest';
  djuliUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4/latest';

  wishListOfDashi = [];
  wishListOfDjuli = [];
  emptyList = [];

  dashiInput = '';
  djuliInput = '';


  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.getDashiLists(this.dashiUrl);
    // this.getDjuliLists(this.djuliUrl);
  }

  addItem(): void{
    this.emptyList.push(this.dashiInput);
    const lastList = this.wishListOfDashi.concat(this.emptyList);
    this.saveDashi(lastList);
  }

  getDashiLists(url: string): void{
    this.dataProvider.getList(url)
    .subscribe((data) => {
      this.wishListOfDashi = data;
    });
  }

  getDjuliLists(url: string): void{
    this.dataProvider.getList(url)
    .subscribe((data) => {
      this.wishListOfDjuli = data;
    });
  }


  saveDashi(item: any): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(item).subscribe(item => {
      this.wishListOfDashi.push(item);
    });
  }
}
