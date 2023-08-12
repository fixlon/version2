import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryfullComponent } from './gallery/galleryfull/galleryfull.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PedicureComponent } from './services/pedicure/pedicure.component';
import { EyebrowComponent } from './services/eyebrow/eyebrow.component';
import { HaircutComponent } from './services/haircut/haircut.component';
import { HairstyleComponent } from './services/hairstyle/hairstyle.component';
import { MakeupComponent } from './services/makeup/makeup.component';
import { WaxingComponent } from './services/waxing/waxing.component';
import { SkincleaningComponent } from './services/skincleaning/skincleaning.component';
import { ManicureComponent } from './services/manicure/manicure.component';
import { AuthGuard } from './auth.guard';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminGuard } from './admin.guard';
import { GaddComponent } from './gadd/gadd.component';
import { DetailsComponent } from './details/details.component';
import { CanDeactivateGuardService } from './canDeactivate-gaurd.service';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { TermsComponent } from './terms/terms.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentserviceComponent } from './paymentservice/paymentservice.component';
import { MembershipComponent } from './membership/membership.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  // {
  //   path:'',
  //   component:HomeComponent,
  // },
  {
    path: 'change-password/:id',
    component: ChangePasswordComponent
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"about",
    component:AboutComponent,
  },

  {
    path:"services",
    component:ServicesComponent,

  },
  {
    path:'',
    children:[{
      path:"services/add",
      canActivate:[AdminGuard],
      component:AddComponent,
    }
  ]

  },
  {
    path:"bookingHistory",
    canActivate:[AuthGuard],
    component:BookinghistoryComponent
  },
  {
    path:"terms-of-service",
    component:TermsComponent
  },
  {
    path:'',
    children:[{
      path:"gallery/fullgallery/add",
      canActivate:[AdminGuard],
      component:AddComponent,
    },
    {
      path:"gallery/galleryadd",
      canActivate:[AdminGuard],
      component:GaddComponent,

    },

  ]

  },


{

  path:'',
  canActivate:[AuthGuard],
    children:[
      {
       path:"services/manicure",
      component:ManicureComponent,
    },
    {
      path:"services/pedicure",
      component:PedicureComponent,
    },
    {
      path:"services/eyebrow",
      component:EyebrowComponent
    },
    {
      path:"services/haircut",
      component:HaircutComponent
    },
    {
      path:"services/hairstyle",
      component:HairstyleComponent
    },
    {
      path:"services/makeup",
      component:MakeupComponent
    },
    {
      path:"services/waxing",
      component:WaxingComponent
    },
    {
      path:"services/skincleaning",
      component:SkincleaningComponent
    },
    {
      path:"services/:serviceType/:id",
      component:DetailsComponent
    },
    //booking page routing
    {
      path: "services/:serviceType/:id/payment",
      canDeactivate:[CanDeactivateGuardService],
      component: PaymentserviceComponent 
    }

  ]
  },

  {
    path:"packages",
    canActivate:[AuthGuard],
    component:PackagesComponent,
  },
  {
    path:'',
    canActivate:[AuthGuard],
    children:[{
      path:"packages/payment",
      canDeactivate:[CanDeactivateGuardService],
      component:PaymentComponent
    },
    {
      path:"packages/membership",
      component:MembershipComponent
    },]

  },
  {
    path:"gallery",
    component:GalleryComponent,

  },
  {
    path:'',
    canActivate:[AuthGuard],
    children:[{
      path:"gallery/fullgallery",
      component:GalleryfullComponent,
    }]

  },


  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    canDeactivate:[CanDeactivateGuardService],
    component:RegisterComponent
  },


  {
    path:"forgot-password",
    component:ForgotPasswordComponent
  },
  {
    path:"change-password",
    component:ChangePasswordComponent
  },
  {
  path:"profile",
  canActivate:[AuthGuard],
  component:ProfileComponent
  },
  {
    path:"privacy-policy",
    component:PrivacyPolicyComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
