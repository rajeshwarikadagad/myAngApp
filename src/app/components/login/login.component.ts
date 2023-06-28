import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url = 'https://reqres.in/api/login';
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UsersService
  ) {
    window.localStorage.clear();
    window.sessionStorage.clear();

  }
 
  ngOnInit() {






















    


    


//     var array=[[1],[2,3],[4,5],[6,7,8],[10],[11,12],15];
//     let myArr = [];
//     console.log(array)
//  let result =  array.reduce((acc, el) => acc.concat(el), []);
// console.log('result',result);

let myObj =
  {
 name: 'raj',
  age: '28',
  address: 'Bangalore'
}

// let abc = myObj.keys()
 


// let abc = myObj.keys().length
// if(myObj.hasOwnProperty('address'))
 



  

  }



 













  myTestMethod() {
    // console.log(Number(undefined)) 
    // console.log(Number(null))
    // console.log(Number("I study JS"))
    // console.log(Number(" "))

    // console.log(typeof undefined);
    // console.log(typeof null);
    // console.log(typeof NULL);
    // console.log(typeof typeof 1);
    // myVar = "Hoisting";
    //  console.log('myVar', myVar);


// console.log( 10 < 20 < 30 );

// console.log( 30 > 20 > 10 );


const elements = [1, 2, 3, 4, 5];

 

elements.forEach(element => {

  console.log(element);

 

  if(element == 2){

    return;

  }

})


    var myVar;

    //debouncing throatling, deadZone

  //  let a = [{1,2,3,4]
  //  let b =...a;


   //call apply . bind

   let names = [
    { name: 'Shawn', age: 21},
    { name: 'Max', age: 20},
    { name: 'Jane', age: 20},
    { name: 'Mark', age: 23},
    { name: 'Nancy', age: 23}
    ];
 let obj= [20, 21, 23 ];
let result:any=[];
    names.forEach(element => {
      obj.forEach(item => {
        if( item == element.age) {
          console.log('item', item);
          result.push({item: element });
    }})

    })
console.log('result', result);
    // this.myTestMethod();

    let x = 10;
    let z =x;
 
 
 
 
     let myArr =[1,1,2,3,4,5,3];
 
      let duplicateArr: number[] = [];
 
      for(let i =0; i< myArr.length; i++) {
       let num = myArr[i];
     //  for(let j = 0; j<myArr.length; j++) {
     //     if(i !== j && myArr[i] == myArr[j]) {
     //       duplicateArr.push(myArr[i]);
     //     }
     //  }
       if(myArr.indexOf(num) !== i &&  duplicateArr.indexOf(num) == -1) {
         duplicateArr.push(myArr[i])
       }
      }
  //  console.log('duplicateArr', duplicateArr);
 
 
   let myArr2 =[1,2,5,3,4];
   for(let i=0; i<myArr2.length; i++) {
     let count = 0;
       for(let j = 0; j< myArr2.length; j++) {
         if(myArr2[i] < myArr2[j]) {
           count++
         }
       }
       if(count == 1 ) {
        //  console.log('second largest element ', myArr2[i]);
       }
    
   }
//  console.log('myArr2', myArr2);
 // console.log(myArr2[myArr2.sort().length-2]);
 
 
    //TODO write code here

    let Types : any = ['T-Shirt','Shirt']
    Types.length = 0;
    let mytype = Types[0];
    // console.log(mytype)

    var X = 5;
var Y: any = "3";
// console.log(X+Y)
// console.log(X-Y)

  }

  onClickLogin() {
    
    // My name is  -> yM eman si

    // let myString = "My name is";

    // myString.split(' ').forEach(element => {
    //   element.split('').reverse().join('');
    // });
    // console.log('myArr', myString);

    // this.http.get<any>(this.url).subscribe(res => { console.log(res) });

    this.userService.login().subscribe((response) => {
      // console.log(response);
      window.sessionStorage.setItem('accessToken', response && response.token);
      if (response && response.token) {
        this.router.navigate(['home']);
      }
    })
  }
}
