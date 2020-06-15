import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooLong'
})
export class TooLongPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length > 20) {
      return (value.slice(1, 20) + '...');
    }
  }

}
