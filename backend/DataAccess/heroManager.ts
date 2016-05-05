/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
import mongoose = require('mongoose');
var heroSchema = require('../models/heroModel');

//connect to our database
class heroManager{
    
    constructor(){
            var dbName: string = 'heroDB';
            var connectionString: string = 'mongodb://localhost:27017/';
            mongoose.connect(connectionString);
    }
    //
    public saveHero(req: any){
        var connection = new heroSchema(req.body);
        connection.save((err) => 
        {
            if(err){
                console.log("Couldn't save the heroes!" + err);
            }
            console.log(req.body); //This will display the request body in the terminal window
        });
      
    }
    //This serves up every post in the database
    public getHeroes(): Promise<any>{
        return new Promise((resolve, reject) =>
        {
            heroSchema.find((err, hero) => {
                 return resolve(hero);
            });
        })
    }
    //This method will return a set number of hero posts, starting from the 'firstPostIndex' to 'numberOfPosts' in increasing order
    //based on the time of submission.
    public getSomePosts(firstPostIndex: number, numberOfPosts: number): Promise<any>{
        
        return new Promise((resolve, reject) => 
        {
            return resolve("test");
        })
    }
   
}
export = heroManager;