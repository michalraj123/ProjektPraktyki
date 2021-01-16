import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders}from'@angular/common/http';
import{Router}from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public input:any;
 
  constructor(private http:HttpClient,private router:Router){
    this.input={
      'login':'',
      'password':''
    };
  }
 
  ngOnInit():void{}
 
  publiclogin(){
    if(this.input.login&& this.input.password) {
      let headers = new HttpHeaders({ 'content-type': 'application/json' });
      this.http.post('http://localhost:4200/login',JSON.stringify(this.input),{headers:headers})
        .subscribe(result=>
          this.router.navigate(['/todolist'],{'queryParams':result})
        );
    }
  }
 
}