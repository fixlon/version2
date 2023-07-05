import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PackagesComponent } from './packages/packages.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GalleryfullComponent } from './gallery/galleryfull/galleryfull.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManicureComponent } from './services/manicure/manicure.component';
import { PedicureComponent } from './services/pedicure/pedicure.component';
import { EyebrowComponent } from './services/eyebrow/eyebrow.component';
import { MakeupComponent } from './services/makeup/makeup.component';
import { HaircutComponent } from './services/haircut/haircut.component';
import { HairstyleComponent } from './services/hairstyle/hairstyle.component';
import { WaxingComponent } from './services/waxing/waxing.component';
import { SkincleaningComponent } from './services/skincleaning/skincleaning.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { GaddComponent } from './gadd/gadd.component';

@NgModule({
  declarations: [	
    AppComponent,
      AboutComponent,
      ServicesComponent,
      PackagesComponent,
      GalleryComponent,
      ContactComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      GalleryfullComponent,
      ForgotPasswordComponent,
      ChangePasswordComponent,
      ManicureComponent,PedicureComponent,SkincleaningComponent,EyebrowComponent,MakeupComponent,HaircutComponent,HairstyleComponent,WaxingComponent,
      AddComponent,
      PaymentComponent,
      GaddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
