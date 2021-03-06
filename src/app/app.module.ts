import { NgModule } from '@angular/core';

// To display app
import { BrowserModule}  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';

@NgModule ({

    // All module declare here
    imports: [
        BrowserModule
    ],

    // All Component & pipe
    declarations: [
        AppComponent,
        ProductComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

     // All services
    providers: []
})

export class AppModule {

}