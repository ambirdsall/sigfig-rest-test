import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

import { Person } from './person'

@Injectable()
export class PeopleService {
  private baseUrl = 'http://localhost:3001'

  constructor(private http: Http) { }

  getPeople(companyId: string): Promise<Person[]> {
    return this.http.get(this.peopleUrlFor(companyId))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  getPerson(personId: string): Promise<Person> {
    return this.http.get(this.personUrlFor(personId))
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError)
  }

  private peopleUrlFor(companyId: string): string {
    return `${this.baseUrl}/companies/${companyId}/people`
  }

  private personUrlFor(personId: string): string {
    return `${this.baseUrl}/person/${personId}`
  }

  private handleError(error: Response | any) {
    console.error(error)
    debugger

    return Observable.throw('¯\_(ツ)_/¯')
  }
}
