import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../interface/comment';
import { ResponseWrapper } from 'src/app/shared/interface/response-wrapper';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommentService {

  private _endpoint = environment.API_URL + '/comments';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<ResponseWrapper<Comment[]>> {
    return this._http.get<ResponseWrapper<Comment[]>>(this._endpoint);
  }

  getById(id: string): Observable<ResponseWrapper<Comment>> {
    return this._http.get<ResponseWrapper<Comment>>(`${this._endpoint}/${id}`);
  }

  save(payload: Comment): Observable<ResponseWrapper<Comment>> {
    return this._http.post<ResponseWrapper<Comment>>(this._endpoint, payload);
  }

  update(id: string, payload: Comment): Observable<ResponseWrapper<Comment>> {
    return this._http.put<ResponseWrapper<Comment>>(`${this._endpoint}/${id}`, payload);
  }

  delete(id: string): Observable<ResponseWrapper<Comment>> {
    return this._http.delete<ResponseWrapper<Comment>>(`${this._endpoint}/${id}`);
  }
}
