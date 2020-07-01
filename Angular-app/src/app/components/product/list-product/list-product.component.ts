import { Component, OnInit } from '@angular/core';


import { ProductService } from '../../../shared/services/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../shared/models/product.interface';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  keywordTxt;
  productList: Product[];
  constructor(private productService: ProductService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
    ) { }

  ngOnInit(){
    this.productService.getAllProducts().subscribe(array =>{
      this.productList = array.map(product =>{
        return{
          id: product.payload.doc.id,
          ...product.payload.doc.data() as Product
        }
      });
      console.log(this.productList);
    });
  }

  updateProductData(updatedProduct: Product){
    this.productService.formData = Object.assign({}, updatedProduct);
  }

  deleteProduct(id: string){
    if (confirm('Are you sure you want to delete this product?')) {
      this.firestore.doc('products/' + id).delete();
      this.toastr.warning('OK BABY!!!', 'List Products Update');
    }
  }
}
