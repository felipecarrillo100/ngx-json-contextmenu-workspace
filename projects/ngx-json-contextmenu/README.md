# ngx-json-contextmenu

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Requirements
This library requires that your project supports scss
The library depends on @perfectmemory/ngx-contextmenu @angular/cdk that needs to be installed together with this library

## To install
```bash
npm install ngx-json-contextmenu @angular/cdk @perfectmemory/ngx-contextmenu @angular/cdk
```

Install the css/scss dependencies in your styles.scss
```scss
@import '@angular/cdk/overlay-prebuilt.css';
@import './node_modules/@perfectmemory/ngx-contextmenu/src/assets/stylesheets/base.scss';
```

Import the `NgxJsonContextmenuModule` module in your module imports in app.module.ts
```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonContextmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Include a html div component at the top of your app.component.html.  You can use menuClass for styling
```ts
<ngx-json-contextmenu></ngx-json-contextmenu>
```

## To use
Create a JSON array with the entries. You will open the context-menu by using the service provided called `NgxJsonContextmenuService`

Here is an example: 

app.component.html
```html
<ngx-json-contextmenu></ngx-json-contextmenu>

<h1>Click on the buttons</h1>

<button (click)="test1($event)">Click me</button>
<button (contextmenu)="test1($event)">Right Click me</button>

```
app.component.ts
```ts
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
```
The service also allows you to open the context menu at an specific x,y location by using:
```ts
    this.contextMenuService.openMenuXY(x, y, menu);
```

You are done!  At this moment you should have a fully functional context menu.

## Advanced options
The component `` supports multiple options:
 * menuClass: allows you to define a class to customize the styling
 * rtl: if true then rtl is applied to the context menu

## Style customization
Define a class with `menuClass` then add the scss for it 
```scss
/** Adding Custom Styling To Context Menu */
.my-custom-style {
  /* Styling of the element where a context menu can appear */
  --ngx-contextmenu-focusable-border-bottom: 1px dotted #70757e;

  /* Styling of the context menu itself */
  --ngx-contextmenu-font-family: sans-serif;
  --ngx-contextmenu-background-color: #2d2727;
  --ngx-contextmenu-border-radius: 4px;
  --ngx-contextmenu-border: 1px solid rgba(0, 0, 0, 0.18);
  --ngx-contextmenu-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
  --ngx-contextmenu-font-size: 14px;
  --ngx-contextmenu-margin: 2px 0 0;
  --ngx-contextmenu-min-width: 160px;
  --ngx-contextmenu-outline: 1px solid #70757e;
  --ngx-contextmenu-padding: 5px 0;
  --ngx-contextmenu-text-color: #e3e7ee;
  --ngx-contextmenu-text-disabled-color: #8a909a;
  --ngx-contextmenu-max-height: 100vh;

  /* Styling of context menu items */
  --ngx-contextmenu-item-arrow-left: '◀';
  --ngx-contextmenu-item-arrow-right: '▶';
  --ngx-contextmenu-item-background-hover-color: #36568a;
  --ngx-contextmenu-item-separator-color: #d8dfea;
  --ngx-contextmenu-item-separator-padding: 10px;
  --ngx-contextmenu-item-separator-width: 96%;
  --ngx-contextmenu-item-padding: 6px 8px;
  --ngx-contextmenu-item-text-hover-color: #97a7be;
}
```

## Advanced customization
The context menu provided is text only. If you want to use icons or apply other customization you can define your own custom template called `menuItemTemplate`.
Add this to your `app.component.html` 
```html
<app-custom-context-menu menuClass="my-custom-style" >
  <ng-template let-menuItem #menuItemTemplate>
    <div [style]="{display:'inline-block'}" [title]="menuItem.title">
      <div [style]="{margin:'0px 4px 0px 2px', display:'inline-block'}">😊</div>
      <div [style]="{display:'inline-block'}">
        {{menuItem.label}}
      </div>
    </div>
    <input *ngIf="menuItem.checkbox" type="checkbox" [checked]="menuItem.checkbox.value" (checked)="menuItem.action && menuItem.action()" [disabled]="menuItem.disabled">
  </ng-template>
</app-custom-context-menu>
```

