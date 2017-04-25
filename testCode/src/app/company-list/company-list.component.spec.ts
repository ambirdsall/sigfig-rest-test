import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CompanyListComponent } from './company-list.component'
import { CompanyDetailComponent } from '../company-detail/company-detail.component'
import { CompanyService } from '../company.service'
import { companyServiceStub } from '../mock-companies'

describe('CompanyListComponent', () => {
  let component: CompanyListComponent
  let fixture: ComponentFixture<CompanyListComponent>;
  let companyService: CompanyService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompanyListComponent,
        CompanyDetailComponent
      ],
      providers: [
        { provide: CompanyService, useValue: companyServiceStub }
      ]
    })

    fixture = TestBed.createComponent(CompanyListComponent)
    component = fixture.componentInstance

    companyService = fixture.debugElement.injector.get(CompanyService)
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })

  xit('should list all companies', async(() => {
    fixture.detectChanges()

    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component.companies.length).toBe(2)
    })
  }))
})
