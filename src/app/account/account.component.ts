import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Blog } from '../blog';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;
  blog: Blog;
  blogss :Blog[];
  loadedBlogs:Blog[] =[]
  loadedUsers:User[] = []
  error= null;
   userName ;

  constructor(private http : HttpClient,private authService : AuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('currentuser');
    console.log("this.username in account inside ngoninit in account"+ this.userName)
  }
  


showUserInfo(){
  
    let httpOptionsWithAuth = {
      headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic '+ localStorage.getItem('login_info')
    })};
    console.log("this.username in account "+ this.userName)
   
   

    // return this.http.get<Blog>('/SmartBloggers/rest/blogs/users/'+this.userName,httpOptionsWithAuth).subscribe(blogs => {
       
    //   console.log("blog in myAccountInfo "+blogs);
    //  this.blogs.push(blogs);
      
  
    //   return this.blogs;
    // })
  
      
      return this.http.get<Blog>('/SmartBloggers/rest/blogs/users/'+this.userName,httpOptionsWithAuth)
      .pipe(
        map(responseData =>{
          const blogArray: Blog[]=[];
          const userArray: Blog[]=[];
          for (const key in responseData){
            if(responseData.hasOwnProperty(key)){
              blogArray.push({...responseData[key], blogId : key});
            }
          }
          return blogArray;

          
        })
      ).subscribe(blogs=>{
      
        this.loadedBlogs = blogs
        console.log(blogs);
      },error =>{
        
        this.error = error.message;
        console.log(error);
      });

      
   
    

    

    }
      


}
