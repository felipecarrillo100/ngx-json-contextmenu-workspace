import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {NgxJsonContextmenuComponent} from "./ngx-json-contextmenu/ngx-json-contextmenu.component";
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";


@NgModule({
  declarations: [
    NgxJsonContextmenuComponent
  ],
  imports: [
    CommonModule,
    ContextMenuModule
  ],
  exports: [
    ContextMenuModule,
    NgxJsonContextmenuComponent
  ]
})
export class NgxJsonContextmenuModule {

}
