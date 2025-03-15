import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush strategy
})
export class ChildComponent {
 
  @Input() childData: string="";
  @Output() childEvent = new EventEmitter<string>();
  sendMessage() {
    this.childEvent.emit('Hello from Child');
  }
  count = signal(0);
  increment() {
    this.count.set( + 1);
  }
  message = signal('Hello, World!');
  ngOnDestroy() {
    // Clean up signal resources if necessary
    // this.message.cleanup();
  }
}
