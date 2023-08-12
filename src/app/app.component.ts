import { Component, ContentChild, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ChildComponent, { static: false })
  child!: ChildComponent;
  ngOnInit() {
    console.log('ngInit', this.child?.sample);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.child?.sample);
  }
  title = 'my-app';
  name = 'XYZ';
  val = 'Hello';
  valueFromchild = '';
  show = true;
  ValCome(event: string): void {
    this.valueFromchild = event;
  }

  check(): void {
    this.show = !this.show;
  }
}
