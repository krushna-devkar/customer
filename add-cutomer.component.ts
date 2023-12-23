import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/model/customer.model';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-add-cutomer',
  templateUrl: './add-cutomer.component.html',
  styleUrls: ['./add-cutomer.component.css']
})
export class AddCutomerComponent implements OnInit{
  customerForm! :FormGroup;
  constructor(private fb :FormBuilder,private route :Router,private http :HttpClient,private api:ApiService){}

  ngOnInit(): void {
      this.customerForm = this.fb.group({
        fname:['',Validators.required],
        lname:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required]
      })
  }

  submitCustomer(data:Customer){
    console.log(this.customerForm.value);
    this.api.addCustomer(data).subscribe((res=>{
      this.customerForm.reset();
    this.route.navigate(['/customerList'])
    }))
    
  }
}
