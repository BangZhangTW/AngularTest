import {Injectable} from "@angular/core";
import {MagazineList} from "./magazine-list";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  private magazineListUrl: string = "https://apis.lativ.com.tw/v1/magazine/list"

  constructor(
    private http: HttpClient
  ) {
  }

  getMagazineList(): Observable<Array<MagazineList>> {
    let headers = this.getHeaders();
    return this.http.get<Array<MagazineList>>(this.magazineListUrl, {headers})
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append("X-LATIV-PLATFORM", "WebMobile");
    return headers;
  }
}
