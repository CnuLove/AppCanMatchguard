import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomrouteService {

  constructor() { }

  get routingPermision(){
    return false;
  }
}
