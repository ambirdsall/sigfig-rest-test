import { Injectable } from '@angular/core'
import { Company } from './company'
import { COMPANIES } from './mock-companies'

@Injectable()
export class CompanyService {
  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES)
  }
}
