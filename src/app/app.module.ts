import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageComponentComponent } from './components/page-component/page-component.component';
import { AnnotationComponentComponent } from './components/annotation-component/annotation-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponentComponent,
    AnnotationComponentComponent,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
