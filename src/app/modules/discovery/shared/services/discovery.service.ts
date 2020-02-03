import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discovery } from '../interface/discovery';
import { ResponseWrapper } from 'src/app/shared/interface/response-wrapper';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DiscoveryService {

  private _endpoint = environment.API_URL + '/discoveries';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<ResponseWrapper<Discovery[]>> {
    return this._http.get<ResponseWrapper<Discovery[]>>(this._endpoint);
  }

  getById(id: string): Observable<ResponseWrapper<Discovery>> {
    return this._http.get<ResponseWrapper<Discovery>>(`${this._endpoint}/${id}`);
  }

  save(payload: Discovery): Observable<ResponseWrapper<Discovery>> {
    return this._http.post<ResponseWrapper<Discovery>>(this._endpoint, payload);
  }

  update(id: string, payload: Discovery): Observable<ResponseWrapper<Discovery>> {
    return this._http.put<ResponseWrapper<Discovery>>(`${this._endpoint}/${id}`, payload);
  }

  delete(id: string): Observable<ResponseWrapper<Discovery>> {
    return this._http.delete<ResponseWrapper<Discovery>>(`${this._endpoint}/${id}`);
  }
}
