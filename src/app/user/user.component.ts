import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        width: '260px'
      })),
      state('closed', style({
        width: '0px'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class UserComponent implements OnInit {
  
  showMenu:Boolean = true;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
