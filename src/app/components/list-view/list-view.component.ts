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

  isUser = false;
  isDashi = false;
  isDjuli = false;
  isEditModeOnDashi = false;
  isEditModeOnDjuli = false;
  djuliPassword = 'asd';
  dashiPassword = '123';
  password = '';
  message = '';


  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {

    this.getDashiLists(this.dashiUrl);
    this.getDjuliLists(this.djuliUrl);
  }

  updateBtn(): void{
    if (this.isUser === false) {
      this.isUser = true;
    }
  }

  passwordCheck(password: string): void {
    console.log(password);
    if (password === this.dashiPassword) {
      this.isEditModeOnDashi = true;
      this.isDashi = true;
      this.isUser = false;
    } else if (password === this.djuliPassword) {
      this.isEditModeOnDjuli = true;
      this.isDjuli = true;
      this.isUser = false;
    } else {
      this.message = 'Incorrect password.';
    }
    this.password = '';
  }

  getDashiLists(url: string): void {
    this.dataProvider.getList(url)
      .subscribe((data) => {
        this.wishListOfDashi = data;
      });
  }

  getDjuliLists(url: string): void {
    this.dataProvider.getList(url)
      .subscribe((data) => {
        this.wishListOfDjuli = data;
      });
  }

  cancel(editMode: boolean): void {
    editMode = !editMode;
    this.message = '';
  }
}
