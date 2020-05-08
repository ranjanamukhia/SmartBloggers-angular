import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm){

  //   console.log(form);

  // }

  onSubmit(){
    this.submitted = true;
    
    this.blog.userName = this.blogForm.value.userName;
    this.blog.tag = this.blogForm.value.tag;
    this.blog.blogName = this.blogForm.value.blogName;
    this.blog.content = this.blogForm.value.content;

    console.log(this.blog)
  }

}
