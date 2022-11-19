import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FristComponentComponent,
  },{
    path: "list",
    component: ListRenderComponent
  },{
    path: "list/:id",
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule {}
