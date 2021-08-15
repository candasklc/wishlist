import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider.service';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  dashiUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4/latest';
  djuliUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4/latest';

  dashiPostUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4';
  djuliPostUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4';


  wishListOfDashi: Data[] = [];
  wishListOfDjuli: Data[] = [];

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

  cancel(editMode: boolean): void{
    editMode = !editMode;
  }
}
