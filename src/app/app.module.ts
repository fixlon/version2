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
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { GaddComponent } from './gadd/gadd.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { DetailsComponent } from './details/details.component';
import { CanDeactivateGuardService } from './canDeactivate-gaurd.service';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { TermsComponent } from './terms/terms.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentserviceComponent } from './paymentservice/paymentservice.component';
import { MembershipComponent } from './membership/membership.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductsComponent } from './products/products.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

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
      AddComponent,
      PaymentComponent,
      GaddComponent,
      SearchComponent,
      FilterComponent,
      DetailsComponent,
      BookinghistoryComponent,
      TermsComponent,
      ProfileComponent,
      HeaderComponent,
      FooterComponent,
      PaymentserviceComponent,
      MembershipComponent,
      PrivacyPolicyComponent,
      ProductsComponent,
      ErrorpageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [AuthGuard,LoginService,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
