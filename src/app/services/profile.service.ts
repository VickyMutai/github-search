import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '97db2a430dfdf0b52f0c0427de633be944c64bab';

  constructor(private http:Http) {
    console.log("service is now ready");
    this.username = "VickyMutai";
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username
     + "client_id=" + this.clientid).map(res => res.json());
  }
}
