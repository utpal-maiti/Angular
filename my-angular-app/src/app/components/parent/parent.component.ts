import { ChangeDetectorRef, Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";
import { AppService } from '../../services/app.service';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  standalone: true,
  imports: [
    ChildComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighlightDirective // Import HighlightDirective
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  parentData = 'Hello from Parent';
  message: string = 'Hello, Angular!';
  newItem: string = "";
  data: string[] = [];
  isVisible: boolean = true;
  items: string[] = [];
  viewMode: boolean = true;
  isDisabled: boolean = true;
  isActive: boolean = true;
  color: string = 'blue';
  fontSize: number = 20;
  imageUrl = 'https://example.com/image.jpg';
  label = 'Button label';
  name = 'Angular';
  myForm: FormGroup;
  state: any;
  constructor(
    private myService: AppService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.data = this.myService.getData();
    this.items = this.myService.getData();
    this.myService.getDataApi().subscribe(response => {
      this.data = response;
    });

    this.myForm.get<string>('name')!.valueChanges.subscribe(value => {
      console.log('Name changed:', value);
    });

    this.myService.state$.subscribe(state => {
      this.state = state;
    });

  }

  addItem() {
    if (this.newItem) {
      this.myService.addItem(this.newItem);
      this.newItem = '';
    }
  }
  receiveMessage(event: string) {
    this.message = event;
  }
  changeData() {
    this.parentData = 'Data changed!';
  }
  changeMessage() {
    this.message = 'Message changed!';
    this.cd.detectChanges(); // Manually trigger change detection
  }
  handleClick() {
    alert('Button clicked!');
  }
  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
  }
  onSubmitFormGroup() {
    console.log('Form Submitted!', this.myForm.value);

  }
  updateState() {
    this.myService.setState({ key: 'value' });
  }
}
