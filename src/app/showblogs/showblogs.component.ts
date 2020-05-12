import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from '../blog';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';
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
  constructor(private http : HttpClient) { }
  ngOnInit(): void {
  }


  showBlogs()
  {
    this.isgettingBlogs = true;

    this.http.get<{[key:string] : Blog}>('https://smartbloggers-7101f.firebaseio.com/blogs.json',
    {
      headers: new HttpHeaders({ 'Custom-Header' : 'Hello' }),
      params: new HttpParams().set('print','pretty')
    })
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
