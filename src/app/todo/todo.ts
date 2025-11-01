import { Component } from '@angular/core';
import { TestDirective } from '../test-directive';
@Component({
  selector: 'app-todo',
  imports: [TestDirective],
  template: `
    <p>todo works!</p>
    <p>This is testing</p>
    <p appTestDirective="pink">This is testing for rebase</p>
  `,
})
export class Todo {}
