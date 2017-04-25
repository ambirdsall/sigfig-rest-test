import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

import { Person } from './person'

@Injectable()
export class PeopleService {
  private baseUrl = 'http://localhost:3001/companies'

  constructor(private http: Http) { }

  getPeople(companyId: string): Promise<Person[]> {
    return this.http.get(this.peopleUrlFor(companyId))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  getPerson(companyId: string, personId: string): Promise<Person> {
    return this.http.get(this.personUrlFor(companyId, personId))
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError)
  }

  private peopleUrlFor(companyId: string): string {
    return `${this.baseUrl}/${companyId}/people`
  }

  private personUrlFor(companyId: string, personId: string): string {
    return `${this.baseUrl}/${companyId}/people/${personId}`
  }

  private handleError(error: Response | any) {
    console.error(error)
    debugger

    return Observable.throw('¯\_(ツ)_/¯')
  }
}
