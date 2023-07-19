import { Component, Input, QueryList, ViewChildren, ViewChild, ContentChild, TemplateRef} from '@angular/core';
import {ContextMenuComponent} from "@perfectmemory/ngx-contextmenu";
import {MenuItemEntryInternal, NgxJsonContextmenuService} from "../ngx-json-contextmenu.service";

@Component({
  selector: 'ngx-json-contextmenu',
  templateUrl: './ngx-json-contextmenu.component.html',
  styleUrls: ['./ngx-json-contextmenu.component.css']
})
export class NgxJsonContextmenuComponent {

  // @ts-ignore
  @ContentChild('menuItemTemplate',{static: false}) templateRef: TemplateRef<any>;

  @Input()
  public rtl: boolean=false;

  @Input()
  public disabled: boolean=false;

  @Input()
  public menuClass: string="";

  // @ts-ignore
  @ViewChild('menuTrigger') menuTrigger: ContextMenuComponent<any>;
  @ViewChild('oneContextMenu') oneContextMenu: any;

  // @ts-ignore
  @ViewChildren(ContextMenuComponent) components: QueryList<ContextMenuComponent<any>>

  private _menuItems: MenuItemEntryInternal[] = [];
  public _menuItemsMain: MenuItemEntryInternal[] = [];
  public _subMenus: MenuItemEntryInternal[][] = [];
  public value:string = "Main Context Menu";

  public getSubMenu(menuId:number | undefined) {
    if (typeof menuId === "undefined") return undefined;
    if (!this.components) return this.oneContextMenu;
    const subMenu = this.components.get(menuId);
    const item = subMenu ? subMenu : this.oneContextMenu;
    return item;
  }

  constructor(private contextMenuService: NgxJsonContextmenuService) {
    contextMenuService.onMenuUpdate().subscribe((v)=>{
      this._menuItemsMain = v.mainMenu;
      this._subMenus = v.subMenus
    })
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.contextMenuService.setMenuTrigger(this.menuTrigger);
    },0)
  }

}
