import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from '../blog';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-showblogs',
  templateUrl: './showblogs.component.html',
  styleUrls: ['./showblogs.component.css']
})
export class ShowBlogsComponent implements OnInit {

  blog = new Blog('','','','')
  loadedBlogs:Blog[] =[]
  isgettingBlogs = false;
  error = null;
  constructor(private http : HttpClient,private authService:AuthService,private cookieService :CookieService) { }
  ngOnInit(): void {
  }


  showBlogs()
  {
    this.isgettingBlogs = true;
    let httpOptionsWithAuth = {
      headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic '+ localStorage.getItem('login_info')
    })};

    this.http.get<Blog>('/SmartBloggers/rest/blogs',httpOptionsWithAuth)
    .pipe(
      map(responseData =>{
        const blogArray: Blog[]=[];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
            blogArray.push({...responseData[key], tag : key});
          }
        }
        return blogArray;
      })
    ).subscribe(blogs=>{
      this.isgettingBlogs = false;
      this.loadedBlogs = blogs
      console.log(blogs);
    },error =>{
      this.isgettingBlogs = false;
      this.error = error.message;
      console.log(error);
    });
 

  

}


  

 

}
