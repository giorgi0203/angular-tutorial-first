import { Component, OnInit } from '@angular/core';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss'],
})
export class WhishlistComponent implements OnInit {
  items;
  constructor(
    private whishlistService: WhishlistService
  ) {
    this.items = this.whishlistService.getItems();
  }

  clearWhishlist() {
    console.warn('Whishlist has been cleared');
    this.items = this.whishlistService.clearWhishlist();
  }
  removeItem(itemId) {
    console.warn('item has been removed', this.items[itemId]);
    this.whishlistService.removeItem(itemId);
  }


  ngOnInit() {
  }

}
