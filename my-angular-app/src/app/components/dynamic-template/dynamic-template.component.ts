import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-template',
  imports: [],
  templateUrl: './dynamic-template.component.html',
  styleUrl: './dynamic-template.component.scss'
})
export class DynamicTemplateComponent {
  @ViewChild('myTemplate')
  myTemplate!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  displayTemplate() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.myTemplate);
  }
}
