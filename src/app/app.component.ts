import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeetingProject';
  /**
   *
   */
  // test:string='www.google.com'
  // redirectApi:string='';
  // constructor(private authservice:AuthService) {
  // }
  // onSubmitHandler(){
  //   this.authservice.onSubmit().subscribe((res:any)=>{
  //     console.log("res Hello",res);
  //     this.redirectApi = res.res;
  //   })
    // this.authservice.onSubmitto(this.redirectApi).subscribe((res:any)=>{
    //   console.log("helloji",res);
    // })
  // }
}
