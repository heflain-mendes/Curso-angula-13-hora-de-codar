import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EnvetsComponent } from './components/envets/envets.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeComponentComponent } from './pipes/pipe-component/pipe-component.component';
import { PaiTesteComponent } from './components/pai-teste/pai-teste.component';
import { FilhoTesteComponent } from './components/filho-teste/filho-teste.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { RouterComponent } from './components/router/router.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponentComponent,
    SecondComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EnvetsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipeComponentComponent,
    PaiTesteComponent,
    FilhoTesteComponent,
    TwoWayBindingComponent,
    RouterComponent,
    ItemDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
