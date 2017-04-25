import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { CompanyListComponent } from './company-list/company-list.component'
import { CompanyService } from './company.service'
import { CompanyDetailComponent } from './company-detail/company-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/companies',
        pathMatch: 'full'
      },
      {
        path: 'companies',
        component: CompanyListComponent
      }
    ])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
