import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
})
export class FlyingHeroesImpurePipe implements PipeTransform {
  transform(value: string): string {
    // Here can be improved by multiple regex
    const val = value.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');

    return val;
  }
}
