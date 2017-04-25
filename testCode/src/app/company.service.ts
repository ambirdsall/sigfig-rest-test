import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { Company } from './company'

@Injectable()
export class CompanyService {
  private companiesUrl = 'http://localhost:3001/companies'

  constructor(private http: Http) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get(this.companiesUrl)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json()
    body.id = body._id
    return body
  }

  private handleError(error: Response | any) {
    console.error(error)

    return Observable.throw('¯\_(ツ)_/¯')
  }
}
