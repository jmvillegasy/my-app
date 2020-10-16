import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  //transform(size: number, ...args: unknown[]): string {
  transform(size: number, extension = 'mb'): string {
    //const transformadSize = `${size} ${extension.toUpperCase()}`
    const transformadSize = `${(size/(1024*1024)).toFixed(2)} ${extension.toUpperCase()}`;
    return transformadSize;
  }

}
