import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from '../blog';
@Component({
  selector: 'app-showblogs',
  templateUrl: './showblogs.component.html',
  styleUrls: ['./showblogs.component.css']
})
export class ShowBlogsComponent implements OnInit {

    blogs :Blog[] =[
    new Blog('My Food Blog','tastyFood','This is where you can learn easy to cook food recipes','Ranjana'),
    new Blog('My Reading Blog','InterestingRead','This is where you can know some interesting books to read','Ranjana') 
  ]

  constructor() { }

  ngOnInit(): void {
  }

 

}
