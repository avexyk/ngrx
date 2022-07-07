import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { itemsReducer } from './state/reducers/items.reducer';
import { ROOT_REDUCERS } from './state/app.state';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS
      // {
      // objeto de json
      // estadoDeItems: itemsReducer
      // }
    ),
    StoreDevtoolsModule.instrument({ name: 'TEST' }) //TODO: NGRX
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
