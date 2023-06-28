import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

interface USER {
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string,
  editRow?: boolean
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("fName") fName: any;
  @ViewChild("lName") lName: any;
  @ViewChild("emailRef") emailRef: any;

  userForm!: FormGroup;
  // focusOnFirstName(){
  //   this.firstNameField.nativeElement.focus();
  // }
  userList: USER[] = [];

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  isAddNewRecord: Boolean = false;
  isEditRecord: Boolean = false;
  isDeleteRecord: Boolean = false;

  editedRowIndex: any;
  updatedValues: any = [];
  userList1: USER[] = [];
  editedRowIndex1: any;
  isSorted: boolean = false;
myForm!: FormGroup;


  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UsersService

  ) { }

  factorialFun(num: number): any {
     return num * this.factorialFun(num-1);
  }
  ngOnInit(): void {
let n: number = 3;
let result = this.factorialFun(n);
   //3!
// console.log('Factorial result', result);
    





















    
    // let myObj =  {
    //   "name": "Rajeshwari",
    //   "address": [
    //     {
    //       "street": "bangalore",
    //       "city": "bangalore"
    //     },
    //     {
    //       "street": "Pune",
    //       "city": "Pune"
    //     }
    //   ]
    // };


    // comp B
  

  // @Output('mydata') mydata: new EventEmmitter();
   

  // mydata.emit("passData");



  // // component A

  // (myFun) ="myFun($event)"

  // myFun(data) {

  // }

this.myForm = this.formBuilder.group({
  name: [''],
  address: this.formBuilder.array([
    this.formBuilder.group({
      street: ['bangalore'],
      city: ['bangalore']
    }),
    this.formBuilder.group({
      street: ['Pune'],
      city: ['Pune']
    })
  ])
});

// zone

console.log(this.myForm.getRawValue());
this.myForm.controls["address"];


// let result = 












    this.getTableData();

    this.userForm = this.formBuilder.group({
      users: this.formBuilder.array([])
    })
  }

  get userFormControls() { return this.userForm.controls; }

  get users() {
    return this.userFormControls['users'] as FormArray;
  }

  addUser(items: USER): FormGroup {
    return this.formBuilder.group({
      id: items.id,
      email: items.email,
      first_name: items.first_name,
      last_name: items.last_name,
      avatar: items.avatar,
    });
  }
  getTableData() {

   
    this.userService.getUserData().subscribe((response) => {
      console.log(response);
      this.userList = JSON.parse(JSON.stringify(response.data));
      this.userList1 = response.data;
      this.userList1.forEach(item => this.users.push(this.addUser(item)))
    });
    //  this.router.navigate(['home']);
  }
  /* onClickAddRecord */
  onClickAddRecord() {

    if (this.isAddNewRecord) {
      this.userList.push({
        id: this.userList.length + 1,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        avatar: '',
      });

      this.resetValues();

    }
    this.isAddNewRecord = !this.isAddNewRecord;

  }

 
  resetValues() {
    this.email = '';
    this.firstName = '';
    this.lastName = '';
  }

  onRowSelect(user?: any) {
    this.userList.forEach(row => (row.editRow && row.id !== user.id) ? row.editRow = false : '')
    user.editRow = true; //!user.editRow;
    this.editedRowIndex = user.id;
    console.log('user.editRow', user.editRow);

  }



  onClickEditRecord(...value: any) {
    //  this.isDeleteRecord = !this.isDeleteRecord;
    const indexNum = this.userList.findIndex(item => item.id === this.editedRowIndex);
    console.log('editedRowIndex', this.editedRowIndex);
    console.log('indexNum', indexNum);
    // this.userList[indexNum].first_name = [...value];
    if (indexNum > -1) {

      this.userList[indexNum].first_name = value[0].nativeElement.value;
      this.userList[indexNum].last_name = value[1].nativeElement.value;
      this.userList[indexNum].email = value[2].nativeElement.value;
    }
    console.log(value);
    console.log('userList', this.userList);
    this.userList.forEach(row => row.editRow ? row.editRow = false : '')
  }

  onClickDeleteRecord() {
    //  this.isDeleteRecord = !this.isDeleteRecord;
    const indexNum = this.userList.findIndex(item => item.id === this.editedRowIndex);
    console.log('editedRowIndex', this.editedRowIndex);
    console.log('indexNum', indexNum);

    if (indexNum > -1) {

      this.userList.splice(indexNum, 1);
    }

  }
  //////////////// form methods

  onRowSelect1(user: any) {
    console.log(user);
    this.userList1.forEach(row => (row.editRow && row.id !== user.id) ? row.editRow = false : '')
    user.editRow = true; //!user.editRow;
    this.editedRowIndex1 = user.id;
  }

  onClickDeleteRecord1() {
    //  this.isDeleteRecord = !this.isDeleteRecord;
    let formData = this.userForm.getRawValue().users;

    const updatedRowIndex = formData.findIndex((item: { id: number }) => item.id === this.editedRowIndex1);

    const indexNum = this.userList1.findIndex(item => item.id === this.editedRowIndex1);

    if (indexNum > -1 && updatedRowIndex > -1) {
      this.userList1.splice(indexNum, 1);
      this.users.removeAt(updatedRowIndex);
      this.resetValues();
    }

  }

  onClickAddRecordForm1() {
    console.log(this.isAddNewRecord);
    if (this.isAddNewRecord) {
      const newRecord: USER = {
        id: this.userList1.length + 1,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        avatar: ''
      }
      // this.users.push(this.addUser(newRecord));
      this.users.push(this.formBuilder.group(newRecord));
      this.userList1.push(newRecord);
    }
    this.isAddNewRecord = !this.isAddNewRecord;

  }

  onClickUpdateRecord() {
    console.log('user:', this.userForm.getRawValue());
    let formData = this.userForm.getRawValue().users;

    const updatedRowIndex = formData.find((item: { id: number }) => item.id === this.editedRowIndex1);
    if (updatedRowIndex) {
      const indexNum = this.userList1.findIndex(item => item.id === this.editedRowIndex1);
      console.log('indexNum', indexNum);

      if (indexNum > -1) {
        this.userList1[indexNum].first_name = updatedRowIndex.first_name;
        this.userList1[indexNum].last_name = updatedRowIndex.last_name;
        this.userList1[indexNum].email = updatedRowIndex.email;
      }
    }
    console.log('userList', this.userList1);
    this.userList1.forEach(row => row.editRow ? row.editRow = false : '')

  }

  tableSort(sortBy: any) {
    this.isSorted = !this.isSorted;

    this.userList1.sort((a,b) => a.first_name < b.first_name ?  this.isSorted ? -1 : 1 : a.first_name > b.first_name ?  this.isSorted ? 1 : -1 : 0);
    console.log('userList1', this.userList1)

  }
}
