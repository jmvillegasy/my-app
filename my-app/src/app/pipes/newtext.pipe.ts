import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newtext'
})
export class NewtextPipe implements PipeTransform {

  transform(value: string): string {
    return `Nuevo Platillo seleccionado: ${value}`;
  }

}
