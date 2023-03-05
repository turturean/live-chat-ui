import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Here can be improved by multiple regex
    return value.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
  }
}
