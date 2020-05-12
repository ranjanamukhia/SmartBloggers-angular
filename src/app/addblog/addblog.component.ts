import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../blog';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  submitted = false;
  error= null;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm){

  //   console.log(form);

  // }

  onSubmit(){
    this.submitted = true;
    
    
    this.blog.userName = this.blogForm.value.userName;
    this.blog.tag = this.blogForm.value.tag;
    this.blog.blogName = this.blogForm.value.title;
    this.blog.content = this.blogForm.value.description;

    console.log(this.blog)

    this.http.post<Blog>('https://smartbloggers-7101f.firebaseio.com/blogs.json',this.blog)
    .subscribe(responseData =>{
      console.log(responseData);
    },error =>{
     
      this.error = error.message;
      console.log(error);
    });
  }

}
