import { Component } from '@angular/core';
import { Product } from '../products';
import { DELETEDITEMS } from 'src/globals';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  incLikes = (itemId : number) => {
    const updatedItemsList = this.products.map((product) => {
      if(itemId === product.id){
        return {...product, likes: product.likes + 1}
      }else{
        return product;
      }
    })
    this.products = updatedItemsList;
  }

  deleteItem = (item: Product) => {
    DELETEDITEMS.push(item)
    const updatedItemsList = this.products.filter((product) => {
      if (DELETEDITEMS.includes(product)) {
        return false
      }
      else 
        return true
    })
    this.products = updatedItemsList;
  }

  share(url: string) {
    window.open(url, "_blank");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/