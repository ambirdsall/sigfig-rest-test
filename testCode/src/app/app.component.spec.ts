import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { CompanyListComponent } from './company-list/company-list.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { CompanyService } from './company.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CompanyListComponent,
        CompanyDetailComponent
      ],
      providers: [
        CompanyService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'In Good Company'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('In Good Company')
  }))

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('In Good Company')
  }))
})
