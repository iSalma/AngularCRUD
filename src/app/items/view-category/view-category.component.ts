import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Product } from '../product';
import { Category } from 'src/app/screen/category';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  category: Category;
  itemList: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _itemService:ItemService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.category = data.id;

    this._itemService.viewCategory(this.category).subscribe(catData => {
      this.itemList = catData;


    })
    });
  }


}
