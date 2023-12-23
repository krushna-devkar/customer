import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from 'src/app/shared/model/customer.model';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-update-cutomer',
  templateUrl: './update-cutomer.component.html',
  styleUrls: ['./update-cutomer.component.css']
})
export class UpdateCutomerComponent implements OnInit{
  public customerid! :number;
public customerData :Customer ={} as Customer;
  constructor(private api:ApiService,private activatedRoute : ActivatedRoute,private route:Router){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((param:Params)=>{
        this.customerid = param['id']
      })
      this.api.fetchdata(this.customerid).subscribe((data:Customer)=>{
        this.customerData = data;
        console.log(data)
      })
  }

  update(){
    this.api.updateData(this.customerData,this.customerid).subscribe((res:Customer)=>{
      alert("data updated sucessfully!!");
      this.route.navigate(['/customerList'])
    })
  }
}
