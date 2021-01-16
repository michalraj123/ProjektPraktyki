import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders}from'@angular/common/http';
import{Router}from'@angular/router';
 
@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']
})
 
export class RegisterComponent implements OnInit{
 
  public input:any;
 
  public constructor(private http:HttpClient,private router:Router){
    this.input={
      'Imie':'',
      'login':'',
      'Nazwisko':'',
      'Haslo':''
    };
  }
 
  ngOnInit():void{}
 
  publicregister(){
    if(this.input.login&& this.input.haslo) {
      let headers = new HttpHeaders({ 'content-type': 'application/json' });
      this.http.post('http://localhost:3000/account',JSON.stringify(this.input),{headers:headers})
        .subscribe(()=>
          this.router.navigate(['/login'])
        );
    }
  }
 
}