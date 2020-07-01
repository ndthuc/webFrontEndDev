import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData: Product;

  constructor(private firestore: AngularFirestore) { }

  getAllProducts(){
    return this.firestore.collection("products").snapshotChanges();
  }
}
