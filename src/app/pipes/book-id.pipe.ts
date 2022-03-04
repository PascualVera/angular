import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookId',
})
export class BookIdPipe implements PipeTransform {
  transform(value: string): string {
    return 'Ref-' + value;
  }
}
