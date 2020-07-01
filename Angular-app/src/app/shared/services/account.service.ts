import { Injectable } from '@angular/core';

import {Account} from '../models/account.interface';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  insertUser(acc:Account, message:string): Observable<Account> {
    return this.http.post<Account>('http://localhost:8000/api/users/insert/', {acc, message});
  }
}
