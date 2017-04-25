import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CompanyDetailComponent } from './company-detail.component'
import { Company } from '../company'

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent
  let fixture: ComponentFixture<CompanyDetailComponent>
  let expectedCompany: Company

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailComponent)
    component = fixture.componentInstance

    // mock out the company to be detailed
    expectedCompany = new Company({})
    expectedCompany.name = "TestCorp"
    component.company = expectedCompany

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
