import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
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
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
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
      component:AddComponent,
    },
    {
      path:"services/delete",
      component:DeleteComponent,
    }
  ]

  },
  {
    path:'',
    children:[{
      path:"gallery/add",
      component:AddComponent,
    },
    {
      path:"gallery/delete",
      component:DeleteComponent,
    }
  ]

  },

{
  path:'',
  canActivate:[AuthGuard],
    children:[
      {
       path:'services/manicure',
      component:ManicureComponent,
    },
    {
      path:'services/pedicure',
      component:PedicureComponent,
    },
    {
      path:'services/eyebrow',
      component:EyebrowComponent
    },
    {
      path:'services/haircut',
      component:HaircutComponent
    },
    {
      path:'services/hairstyle',
      component:HairstyleComponent
    },
    {
      path:'services/makeup',
      component:MakeupComponent
    },
    {
      path:'services/waxing',
      component:WaxingComponent
    },
    {
      path:'services/skincleaning',
      component:SkincleaningComponent
    }]
  },
  {
    path:"packages",
    canActivate:[AuthGuard],
    component:PackagesComponent,
    children:[
      {
        path:':check',
        component:PackagesComponent
      }
    ]
  },
  {
    path:"gallery",
    component:GalleryComponent,

  },
  {
    path:'',
    canActivate:[AuthGuard],
    children:[{
      path:"gallery/galleryfull",
      component:GalleryfullComponent,
    }]

  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
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
