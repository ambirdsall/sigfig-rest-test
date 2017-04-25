import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

import { Company } from './company'

@Injectable()
export class CompanyService {
  private companiesUrl = 'http://localhost:3001/companies'

  constructor(private http: Http) {}

  getCompanies(): Promise<Company[]> {
    return this.http.get(this.companiesUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  getCompany(id: string): Promise<Company> {
    return this.http.get(this.urlFor(id))
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError)
  }

  private urlFor(companyId: string): string {
    return `${this.companiesUrl}/${companyId}`
  }

  private handleError(error: Response | any) {
    console.error(error)
    debugger

    return Observable.throw('¯\_(ツ)_/¯')
  }
}
