import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';

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

  constructor(public service:UserService){
    this.userName=sessionStorage.getItem('userName');
    this.email=sessionStorage.getItem('email');
    this.phone=sessionStorage.getItem('phone');
  }
  ngOnInit(): void {
    this.profileImage = localStorage.getItem('profileImage');
  }

  onDrop(event: any) {
    event.preventDefault();
    this.handleFileUpload(event.dataTransfer.files);
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onFileChange(event: any) {
    this.handleFileUpload(event.target.files);
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

  updateProfile(user:{name:any,phone:any,email:any}){
    this.userDetails.setValue({

    })
// this.service.updateProfile(id,user);

  }
}
