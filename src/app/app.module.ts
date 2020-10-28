import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/decorators/parent/parent.component';
import { ChildComponent } from './components/decorators/child/child.component';
import { FormsModule} from '@angular/forms';
import { LifecycleComponent } from './components/lifecycle/lifecycle/lifecycle.component'
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
