import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  public transform(value: number, locale: string): string {
    return value.toLocaleString(locale);
  }

}
