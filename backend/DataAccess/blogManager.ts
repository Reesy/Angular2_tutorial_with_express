/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
import mongoose = require('mongoose');
var blogSchema = require('../models/blogModel');

//connect to our database
//Ideally you will obtain DB details from a config file

class blogManager{
    
    constructor(){
            var dbName: string = 'blogDB';
            var connectionString: string = 'mongodb://localhost:27017/';
            mongoose.connect(connectionString);
    }
    //All of these methods will create calls to mongo after being formatted and tested
    //This will be used to save a post, This takes in data from client side being routed through router (.get preferably)
    public addContent(req: any){
        var blogConnection = new blogSchema(req.body);
        blogConnection.save((err) => 
        {
            if(err){
                console.log("Couldn't save!" + err);
            }
            console.log(req.body); //This is useful for getting what is being sent to the server
        });
      
    }
    //This serves up every post in the database (Ok for very samll dataset, terrible for any real uss) - Mostly used for a quick test to dump
    //the database
    public getAllPosts(): Promise<any>{
        return new Promise((resolve, reject) =>
        {
            blogSchema.find((err, blog) => {
                 return resolve(blog);
            });
        })
    }
    //This method will return a set number of blog posts, starting from the 'firstPostIndex' to 'numberOfPosts' in increasing order
    //based on the time of submission.
    public getSomePosts(firstPostIndex: number, numberOfPosts: number): Promise<any>{
        
        return new Promise((resolve, reject) => 
        {
            return resolve("test");
        })
    }
   
}
export = blogManager;