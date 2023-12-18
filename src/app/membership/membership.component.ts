import { Component ,OnInit} from '@angular/core';
import { BserviceService } from '../bservice.service';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
membership;
userName;
  constructor(private service:BserviceService){
    this.userName=sessionStorage.getItem('userName');
   }

  ngOnInit() {
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
