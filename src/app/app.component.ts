import { Component } from '@angular/core';
import {MenuItemEntry, NgxJsonContextmenuService} from "ngx-json-contextmenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-json-contextmenu-workspace';

  constructor(private ngxJsonContextmenuService: NgxJsonContextmenuService) {

  }

  test1(event: any) {
    const menu: MenuItemEntry[] = [
      {label: "Compile", action: ()=>{} },
      {label: "Run", action: ()=>{}},
      {label: "Debug", action: ()=>{}},
      {divider: true},
      {label: "Build", action: undefined, children: [
          {label: "Build Project", action: ()=>{} },
          {label: "Rebuild", action: ()=>{}},
        ]}
    ];
    this.ngxJsonContextmenuService.openMenuEvent(event, menu)
  }
}
