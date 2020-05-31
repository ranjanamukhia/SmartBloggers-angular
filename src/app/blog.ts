

export class Blog {
    blogName : string;
    tag : string;
    content : string;
    userName: string;
  

    constructor(blogname:string,tag : string,content : string,userName : string){
        this.blogName = blogname;
        this.tag = tag;
        this.content = content;
        this.userName = userName;
        

    }

}