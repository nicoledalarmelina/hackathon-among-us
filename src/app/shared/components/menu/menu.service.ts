import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class MenuService {
    private _activeMenu: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public activeMenu$ = this._activeMenu.asObservable().pipe();

    activateMenu(activeMenu: boolean): void { this._activeMenu.next(activeMenu); }
}