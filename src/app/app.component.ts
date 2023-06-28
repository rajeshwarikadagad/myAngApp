import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngApp';
  public static isUserLoggedIn: boolean;
  isUserLogged(): any {
    return AppComponent.isUserLoggedIn; 
   }
  constructor() {
    // Input: nums = [100,4,200,1,3,2]
    // Output: 4
    // Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// var longestConsecutive = function(nums) {
//   // console.log("array ", nums);
//   max = 0;
//   obj = {};
//   for(let  i = 0 ; i<nums.length; i++) {
//   obj[nums[i]] = nums[i]+1;
//   }
// //    console.log('obj',obj);
//  i =0
//  count = 1;
//  for(i in obj ) {
//   //    console.log(obj[i]);
//   //    console.log(obj[i] , Object.keys(obj)[i]);
  
//    if(obj[i] == Object.keys(obj)[i]) {
//        console.log(Object.keys(obj)[i]);
//        count++
//    }
//  }
//  return count


  // for(let  i = 0 ; i<nums.length; i++) {
  //      abc =nums[i]+1
  //      counter = 1;
  //     for(let j = 0; j< nums.length; j++) {
  //         if(abc === nums[j]) {
  //          counter ++;
  //          abc += 1;
  //          j = -1;
  //          console.log('counter', counter);
  //         } 
  //     }
  //     if(counter > max) max = counter;
  // }
// console.log('max length ', max);
// return max;


// };


};

}
