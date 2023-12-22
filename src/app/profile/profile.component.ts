import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: any;
  profileImage: any;
  userName:any;
  phone:any;
  userDetails: any;
  userimage:any;
  localurl:any;
  url:any="http://localhost:3000/usersprofile";
  editMode:boolean=true;
  name:any;
  uemail:any;
  uphone:any;
  constructor(public service:UserService,private http:HttpClient,private fb:FormBuilder){
    this.userName=sessionStorage.getItem('userName');
    this.email=sessionStorage.getItem('email');
    this.phone=sessionStorage.getItem('phone');

    this.http.get<any>(this.url).subscribe((res:any) => {
      const user = res.find((result: any) => {
        if(result.email === this.email){
          this.userDetails=result;
          this.name=this.userDetails.username;
          this.uemail=this.userDetails.email;
          this.uphone=this.userDetails.phone;

          this.profileForm.setValue({
            username: this.name,
            phone: this.uphone
          });
        }

      })

    });



  }

  profileForm=this.fb.group({
    username:[,Validators.required],
    // email:[this.uemail,Validators.required],
    phone:[,Validators.required]
  })

  ngOnInit(): void {
  }


  update(Details:any){
    console.log(Details);
   this.service.updateuser(this.email,Details).subscribe((res)=>{
    console.log(res);
   })
    this.editMode=true
  }

}
