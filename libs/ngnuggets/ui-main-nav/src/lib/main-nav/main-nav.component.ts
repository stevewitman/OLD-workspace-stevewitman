import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isHandset: boolean;

  showFilters = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.isHandset$.subscribe((value) => {
      this.isHandset = value;
    });
  }

 
  onClickFilters() {
    this.showFilters = !this.showFilters;
  }

}
