import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  services: any;
  serviceType: string;
allservice:any;
  editMode: boolean=false;
  adminButton:boolean=false;

  constructor(private service: BserviceService, private activatedRoute: ActivatedRoute,private router:Router) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }

  ngOnInit(): void {
    this.serviceType = this.activatedRoute.snapshot.paramMap.get('serviceType');

    switch (this.serviceType) {
      case 'eyebrow':
        this.service.eyebrowservice().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'haircut':
        this.service.haircutservice().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'waxing':
        this.service.waxing().subscribe(data => {
          this.services = data;
          this.allservice= this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'pedicure':
        this.service.pedicure().subscribe(data => {
          this.services = data;
          this.allservice= this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'manicure':
        this.service.manicureservice().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'skincleaning':
        this.service.skincleaning().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'makeup':
        this.service.makeup().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'hairstyle':
        this.service.hairstyle().subscribe(data => {
          this.services = data;
          this.allservice = this.services.find(x => x.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      default:
        // Handle unknown service type
        break;
    }

    this.activatedRoute.params.subscribe(params => {
      this.serviceType = params['serviceType'];
      // Use the serviceType parameter for further processing or data retrieval
    });
    this.serviceType = null;

    // this.editMode=Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));
    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    })
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources here
  }

  selectService(type: string): void {
    this.serviceType = type;
  }

  clearSelection(): void {
    this.serviceType = null;
  }

  appendquery(){
    this.router.navigate(['services/:serviceType',this.allservice.id],{queryParams:{edit:true}})
  }
}
