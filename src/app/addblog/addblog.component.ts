import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../blog';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  @ViewChild('f') blogForm: NgForm;
  blog = {
    blogName : '',
    tag :'',
    content : '',
    userName :''

  };
  user ={
    userName:'',
    password:''
  
  }
  submitted = false;
  error= null;
  currentUserSubscrption : Subscription;
  constructor(private http : HttpClient, private authService: AuthService) { }
  

  ngOnInit(): void {
    this.currentUserSubscrption = this.authService.currentUserIsSet.subscribe(user => {
      console.log("this.user inside subscription in addblog " +this.user);
      if(user){
        this.user.userName = user.userName;
        this.user.password = user.password;
      }
    });
  }

   

  onSubmit(blogForm:NgForm){
    this.submitted = true;
    let httpOptionsWithAuth = {
      headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic'+ btoa(this.user.userName + ":" + this.user.password)
    })};
   
    
    // this.blog.userName = this.blogForm.value.userName;
    this.blog.tag = this.blogForm.value.tag;
    this.blog.blogName = this.blogForm.value.title;
    this.blog.content = this.blogForm.value.description;  

    console.log(this.blog);
    console.log("this.user in add blog "+this.user);
    
        return this.http.post<Blog>('/SmartBloggers/rest/blogs/',this.blog,httpOptionsWithAuth)
        .subscribe(responseData =>{
          console.log(responseData);
        },error =>{
         
          this.error = error.message;
          console.log(error);
        });
      
      
  
     
  
  }
   

}
