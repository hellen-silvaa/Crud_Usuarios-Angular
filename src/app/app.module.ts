import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

//ANGULAR MATERIAL
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';

import { AngularFireModule } from "@angular/fire/compat";
// import {LoginComponent} from './login'
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //ANGULAR MATERIAL
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [ 
    // provideFirebaseApp(() => initializeApp({"projectId":"crud-usuarios-angular-7a7a9","appId":"1:852061958134:web:67f257cd75eae6774a61d7","storageBucket":"crud-usuarios-angular-7a7a9.appspot.com","apiKey":"AIzaSyAuAIpOXIv2gAIg0EGhNvcV1MTk5HskOKI","authDomain":"crud-usuarios-angular-7a7a9.firebaseapp.com","messagingSenderId":"852061958134"})), provideFirestore(() => getFirestore())
  ],
   // provideAnimationsAsync()
  bootstrap: [AppComponent]
})
export class AppModule { }
