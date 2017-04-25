import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { CompanyListComponent } from './company-list/company-list.component'
import { CompanyService } from './company.service'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PeopleListComponent } from './people-list/people-list.component'

const appRoutes = [
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'companies/:id',
    component: CompanyDetailComponent
  },
  {
    path: 'companies/:id/people',
    component: PeopleListComponent
  },
  {
    path: '',
    redirectTo: '/companies',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    PageNotFoundComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
