import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ValidacionService } from './validacion.service';
import { provideHttpClient } from '@angular/common/http';
import { EtiquetaErrorDirective } from './directiva/etiqueta-error.directive';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, EtiquetaErrorDirective, HomeComponent, StockComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],
  providers: [provideAnimationsAsync(), ValidacionService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
