import { ClickCounterPipe } from './click-counter.pipe';

describe('ClickCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new ClickCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
