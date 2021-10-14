import { Component, Input, OnInit } from '@angular/core';
import { DataInterface } from 'src/app/interfaces/data';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-update-view',
  templateUrl: './update-view.component.html',
  styleUrls: ['./update-view.component.scss']
})
export class UpdateViewComponent implements OnInit {
  @Input() theWishList: DataInterface[] = [];
  @Input() thePostUrl = '';

  fakeList: DataInterface[] = [];
  emptyList: DataInterface[] = [];
  categories = ['clothes', 'electronic', 'other'];
  emptyItem: DataInterface = {
    title: 'Your wishlist is waiting to be updated...',
    link: '',
    category: 'none',
    isStillWanted: true,
  };
  theTitleInput = '';
  theLinkInput = '';
  theCategoryInput = '';
  emptyListError = 'Please do not send empty list item.';

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.cloneArray(this.theWishList);
  }

  cloneArray(list: DataInterface[]): void{
    this.fakeList = [...list];
  }

  keyDownFunction(event, titleInput: string, linkInput: string, categoryInput: string): void {
    if (event.keyCode === 13) {
      this.pushToTheList(titleInput, linkInput, categoryInput);
    }
  }

  pushToTheList(titleInput: string, linkInput: string, categoryInput: string): void {
    if (!titleInput.replace(/\s/g, '' ) || this.theCategoryInput === '') {
      return alert(this.emptyListError);
    }else{
      const objectToSend = {
        title: titleInput,
        link: linkInput,
        category: categoryInput,
        isStillWanted: true
      };
      this.theWishList.push(objectToSend);
    }
  }

  save(list: DataInterface[], url: string): void{
    if (list.length === 0) {
      list.push(this.emptyItem);
    } else {
      this.postList(list, url);
    }
  }


  deleteItem(item: DataInterface): void{
    const i = this.theWishList.indexOf(item);
    this.theWishList.splice(i, 1);
  }

  postList(list: DataInterface[], url: string): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dataProvider.addItem(list, url).subscribe(item => {
      item = list;
    });
  }
}
