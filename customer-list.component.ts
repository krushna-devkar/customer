import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer.model';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
data :undefined |Customer[];
item: any;
  constructor(private api :ApiService){}

  ngOnInit(): void {
    this.getCustomer(); 
  }

  getCustomer(){
    this.api.getCustomer().subscribe(res=>{
      this.data=res
    })
  }

  //delete data
  delete(id:number){
    this.api.deleteCustomer(id).subscribe(res=>{
      alert("customer deleted succesfully!!");
      this.getCustomer();
    })
  }
  logout(){
    localStorage.removeItem("logindata")

  }
}
