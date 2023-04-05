import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddressService } from '../../address.service';
// import { AdminService } from '../../admin/admin.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private adminService: AdminService,
    private userService: UserService,
    private addressService: AddressService
  ) { }

  subdistricts: any;
  districts: any;
  provinces: any;

  submitted = false;

  ngOnInit(): void {
 
  }

  

 

 
}//end
