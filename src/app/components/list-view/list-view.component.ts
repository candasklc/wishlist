import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data, RouterLink } from '@angular/router';
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

  wishListOfDashi: Data[] = [];
  wishListOfDjuli: Data[] = [];
  emptyList = [];
  emptyListError = 'Please do not send empty list item.';

  dashiInput = '';
  djuliInput = '';

  isEditModeOnDashi = false;
  isEditModeOnDjuli = false;

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.getDashiLists(this.dashiUrl);
    this.getDjuliLists(this.djuliUrl);
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

  addToEmptyList(input: string): void {
    if (!input.replace(/\s/g, '').length) {
      return alert(this.emptyListError);
    }else{
      const inputToSend = {
        item: input,
        isStillWanted: true
      };
      this.emptyList.push(inputToSend);
    }
  }

  save(list: any, url: string): void{
    const lastList = list.concat(this.emptyList);
    this.postLists(lastList, list, url);
  }

  postLists(item: any, list: any, url: string): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(item, url).subscribe(item => {
      list.push(item);
    });
  }

  cancel(editMode: boolean): void{
    editMode = !editMode;
  }
}
