import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sideBarVisibleSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  sideBarVisibleObs$ = this.sideBarVisibleSubject$.asObservable();

  constructor() { }

  showSideBar() {
    this.sideBarVisibleSubject$.next(true);
  }

  hideSideBar() {
    this.sideBarVisibleSubject$.next(false);
  }
}
