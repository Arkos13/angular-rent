import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ImageUploadService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<string | any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(`${environment.apiURL}/api/v1/rentals/image-upload`, formData).pipe(map(((json: any) =>  json.imageUrl)));
  }
}
