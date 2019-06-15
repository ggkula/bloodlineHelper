import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  public browser = new BehaviorSubject(true);

  constructor() { }
}
