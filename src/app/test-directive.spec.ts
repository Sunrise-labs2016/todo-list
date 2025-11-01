import { TestDirective } from './test-directive';

describe('TestDirective', () => {
  it('should create an instance', () => {
    const directive = new TestDirective('' as any);
    expect(directive).toBeTruthy();
  });
});
