import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  searchList<T>(list: T[], criterion: (item: T) => boolean): T[] {
    return list.filter(criterion);
  }

  getSameValueOf(list: any[], criterion: string, value: any): number {
    return list.filter(item => item[criterion] === value).length;
  }
}
