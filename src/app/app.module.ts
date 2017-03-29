import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { EstoriaComponent } from '../app/estoria/estoria.component';
import { EstoriaService } from './_service/estoria.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ AppComponent, EstoriaComponent ],
    providers: [ EstoriaService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}