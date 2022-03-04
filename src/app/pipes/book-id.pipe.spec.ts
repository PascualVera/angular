import { BookIdPipe } from './book-id.pipe';

describe('BookIdPipe', () => {
  it('create an instance', () => {
    const pipe = new BookIdPipe();
    expect(pipe).toBeTruthy();
  });
});
