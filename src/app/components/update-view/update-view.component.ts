import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-update-view',
  templateUrl: './update-view.component.html',
  styleUrls: ['./update-view.component.scss']
})
export class UpdateViewComponent implements OnInit {
  @Input() theWishList: Data[] = [];
  @Input() thePostUrl = '';


  theListInput = '';

  emptyList = [];
  emptyListError = 'Please do not send empty list item.';

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
  }


  pushToTheList(input: string): void {
    if (!input.replace(/\s/g, '').length) {
      return alert(this.emptyListError);
    }else{
      const inputToSend = {
        item: input,
        isStillWanted: true
      };
      this.theWishList.push(inputToSend);
    }
  }

  save(list: any, url: string): void{
    const lastList = list.concat(this.emptyList);
    this.postList(lastList, list, url);
  }

  postList(item: any, list: any, url: string): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(item, url).subscribe(item => {
      list.push(item);
    });
  }

  deleteItem(item: object): void{
    console.log(item);
  }

}
