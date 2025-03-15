import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadItems } from '../../NgRxState/Actions';
import { selectAllItems } from '../../NgRxState/Selectors';
import { AppState } from '../../NgRxState/Reducer';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../customValidators/customValidators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items$: any;
  loading$: any;
  error$: any;
  userForm1: FormGroup;
  string: any;
  userForm:any;
isVisible: any;
items: any;
showContent: any;
  
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
  this.items$ = this.store.pipe(select(selectAllItems));
  this.loading$ = this.store.pipe(select(state => state.loading));
  this.error$ = this.store.pipe(select(state => state.error));
  this.userForm1 = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator('Admin')]],
    email: ['', [Validators.required, Validators.email]],
  });
  }
  

  ngOnInit() {
    // this.renderer.setStyle(element, 'display', 'none');
  }

  loadItems() {
    this.store.dispatch(loadItems());
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
  onSubmit1(userForm: any) {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
  // public get sanitizedHtml() {
  //   return this.sanitizer.bypassSecurityTrustHtml(this.rawHtml);
  // }
}
