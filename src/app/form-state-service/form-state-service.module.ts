import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private _disableForm: boolean = false;

  constructor() { }

  get disableForm(): boolean {
    return this._disableForm;
  }

  set disableForm(value: boolean) {
    this._disableForm = value;
  }
}
