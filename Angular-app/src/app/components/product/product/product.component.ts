import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../shared/services/product.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService,
    private firestore: AngularFirestore,
    private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.resetForm();
    } else {
      this.productService.formData = {
        id: null,
        productID: '',
        productName: '',
        category: '',
        quantity: 1,
        price: 1,
        brand: ''
      }
    }
  }

  onSubmit(productForm: NgForm){
    let productData = Object.assign({}, productForm.value);
    delete productData.id;

    if (productForm.value.id == null) {
      this.firestore.collection('products').add(productData);
    } else {
      this.firestore.doc('products/' + productForm.value.id).update(productData);
    }

    this.resetForm(productForm);
    this.toastrService.success('Successfully', 'List Products Update');
  }

}
