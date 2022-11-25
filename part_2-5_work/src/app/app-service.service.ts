import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {   }

  getPosts():Observable<any>{
    return this.http.get('https://cdn.contentful.com/spaces/8utyj17y1gom/entries?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37&content_type=pageTemplate&include=1&fields.url=%2Fhome%2Fsupport')
      .pipe(map((response: any) => {
        const items: []= response.items;
        const urls = items.map((item: any)=> {
          return {
            url: item.fields.url,
          }
        });
        const includes = response.includes.Entry;
        const fields = includes.map((item: any)=> {
          return {
            entryTitle: item.fields['entryTitle']?item.fields['entryTitle']:'',
            title: item.fields['title']?item.fields['title']:'',
            description: item.fields['description']?item.fields['description']:'',
            isNoIndex: item.fields.hasOwnProperty('isNoIndex')?item.fields['isNoIndex']:null
          }
        });
        const finalObject = {
          fields:fields,
          urls:urls
        }
        return finalObject;
      }));
  }
}
