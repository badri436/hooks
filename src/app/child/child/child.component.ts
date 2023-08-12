import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  sample = 'hello';
  num=10;
  arr=[5,8,4,5]
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnChanges() {
    console.log('value changed');
  }

  ngDoCheck() {
    console.log('doCheck');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
  @Input()
  name: string | undefined;

  ValFromChild: string | undefined;

  @Output()
  valComing: EventEmitter<string> = new EventEmitter<string>();
  sendValues(): void {
    this.valComing.emit(this.ValFromChild);
  }
}
