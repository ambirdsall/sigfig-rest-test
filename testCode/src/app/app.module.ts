import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { CompanyService } from './company.service'
import { CompanyListComponent } from './company-list/company-list.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PeopleService } from './people.service'
import { PeopleListComponent } from './people-list/people-list.component'
import { PersonDetailComponent } from './person-detail/person-detail.component'
import { CompanyFormComponent } from './company-form/company-form.component'
import { CompanyCreateComponent } from './company-create/company-create.component'
import { PersonFormComponent } from './person-form/person-form.component'
import { PersonCreateComponent } from './person-create/person-create.component';

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
    path: 'companies/:companyId/people/:personId',
    component: PersonDetailComponent
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
    PeopleListComponent,
    PersonDetailComponent,
    CompanyFormComponent,
    CompanyCreateComponent,
    PersonFormComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CompanyService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
