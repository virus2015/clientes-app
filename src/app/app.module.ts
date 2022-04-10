import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { TiendasComponent } from './tiendas/tiendas.component';
import { TiendaService } from './tiendas/tienda.service';
import { RouterModule,Routes } from '@angular/router';
import { FormComponent } from './tiendas/form.component';



const routes: Routes = [
{path: '', redirectTo: '/tiendas',pathMatch: 'full'},
{path: 'rdirectivas', component: DirectivaComponent},
{path: 'rtiendas', component: TiendasComponent},
{path: 'tiendas/form', component: FormComponent},
{path: 'tiendas/form/:id', component: FormComponent}
];
//{path: 'rtiendas', component: TiendasComponent},
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    FormComponent,
    TiendasComponent,
    FormComponent
//   FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
