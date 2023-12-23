import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../model/customer.model";

@Injectable({
    providedIn :'root'
})

export class ApiService{
   

    constructor(private http:HttpClient){}

    //post data
    addCustomer(data:Customer){
        return this.http.post<Customer>("http://localhost:3000/posts",data)
    }

    //get data
    getCustomer(){
        return this.http.get<Customer[]>("http://localhost:3000/posts")
    }

    //delete data
    deleteCustomer(id:number){
        return this.http.delete<Customer>("http://localhost:3000/posts/"+id)
    }

    //fetch data
    fetchdata(id:number){
        return this.http.get<Customer>("http://localhost:3000/posts/"+id)
    }

    //update
    updateData(data:Customer,id:number){
        return this.http.put<Customer>("http://localhost:3000/posts/"+id,data)
    }
}