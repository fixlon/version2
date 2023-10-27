import { Component ,OnInit} from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
membership;
userName;
log:any={
  msg:sessionStorage.getItem('userName')+ " visited membership"
}
  constructor(private service:BserviceService,private login:LoginService){
    this.userName=sessionStorage.getItem('userName');
   }

  ngOnInit() {
    this.login.sendlog("http://localhost:1999/logs",this.log).subscribe(data=>{
      console.log(data);
    })

    if(sessionStorage.getItem('admin')){
      this.service.package().subscribe(data=>{
        this.membership=data;
      });
  }

  else {
        const useremail=sessionStorage.getItem('email');//stored user email while login and use for checking
        this.service.package().subscribe((data:any) => {
        this.membership = data.filter(booking => booking.cemail === useremail);//filter a data from database by checking mail
        });
       }
  }
}
