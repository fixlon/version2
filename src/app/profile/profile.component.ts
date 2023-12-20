import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: any;
  age: number = 30;
  location: string = 'New York';
  profileImage: string | undefined;
  userName:any;
  phone:any;
  userDetails: any;
  userimage:any;
  localurl:any;
  url:any="http://localhost:3000/usersprofile";

  constructor(public service:UserService,private http:HttpClient){
    this.userName=sessionStorage.getItem('userName');
    this.email=sessionStorage.getItem('email');
    this.phone=sessionStorage.getItem('phone');
  }
  ngOnInit(): void {
    this.userimage=sessionStorage.getItem('image');
    this.profileImage = localStorage.getItem('profileImage');
    this.http.get(this.url).subscribe((data=>{
      this.userimage=data;
      console.log(data);
    }))
  }

  onDrop(event: any) {
    event.preventDefault();
    this.handleFileUpload(event.dataTransfer.files);
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onFileChange(event: any) {
    if(event.target.files&&event.target.files[0]){
      var reader=new FileReader();
      reader.onload=(event:any)=>{
        this.localurl=event.target.result;
        console.log(this.localurl)
      }
      console.log(reader.readAsDataURL(event.target.files[0]));
    }
  }

  private handleFileUpload(files: FileList) {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
        localStorage.setItem('profileImage', this.profileImage);
      };
      reader.readAsDataURL(file);
    }
  }

  update(name:any,email:any,phone:any,profile:any){
console.log(name,email,phone,profile);
    const imgurl=this.localurl;
    this.http.post(this.url,{image:imgurl}).subscribe((res)=>{
      console.log(res);
      alert("profile updated")
    })
  }

}
