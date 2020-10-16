import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DishComponent } from './dish/dish.component';
import { CountriesComponent } from './countries/countries.component';
import { FilesizePipe } from './pipes/filesize.pipe';
import { EmptyPipe } from './pipes/empty.pipe';
import { NewtextPipe } from './pipes/newtext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    DishComponent,
    CountriesComponent,
    FilesizePipe,
    EmptyPipe,
    NewtextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
