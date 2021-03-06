import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MatSidenavModule,
   MatToolbarModule,
   MatIconModule,
   MatListModule,
   MatButtonModule,
   MatFormFieldModule,
   MatMenuModule,
   MatCardModule,
   MatDatepickerModule,
   MatRadioModule,
   MatSelectModule,
   MatInputModule
 } from '@angular/material';

 import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      FlexLayoutModule,
      MatButtonModule,
      MatFormFieldModule,
      FormsModule,
      MatMenuModule,
      MatCardModule,
      MatDatepickerModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule
   ],
   providers: [
      AuthService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: ErrorInterceptor,
         multi: true
       }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
