import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LandingService {
  private username: string;
  private clientid = 'e6712bc8beabcaf2c159';
  private clientsecret = 'ab4c657cb7fd1001329a74da8d97f9b7ca913295';

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = "VickyMutai";

   }
   getUserInfo(){
     return this.http.get("api.github.com/users/" + this.username +
     "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

}
