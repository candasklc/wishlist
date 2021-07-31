import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  dashiPostUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4';
  dashiUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4/latest';

  djuliPostUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4';
  djuliUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4/latest';

  wishListOfDashi = [];
  wishListOfDjuli = [];
  emptyList = [];
  emptyListError = 'Please do not send empty list item.';

  dashiInput = '';
  djuliInput = '';


  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.getDashiLists(this.dashiUrl);
    this.getDjuliLists(this.djuliUrl);
  }

  addItem(list: any, input: string, url: string): void{
    if (!input.replace(/\s/g, '').length) {
      return alert(this.emptyListError);
    }else{
      this.emptyList.push(input);
      const lastList = list.concat(this.emptyList);
      this.saveLists(lastList, list, url);
    }
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


  saveLists(item: any, list: any, url: string): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(item, url).subscribe(item => {
      list.push(item);
    });
  }
}
