import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashMsgService {

  showMessage: boolean = true;

  constructor() { }
}

