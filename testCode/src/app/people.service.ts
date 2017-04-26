import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

import { Person } from './person'

@Injectable()
export class PeopleService {
  private baseUrl = 'http://localhost:3001'
  private personUrl = this.baseUrl + '/person'
  private headers = new Headers({'Content-Type': 'application/json'})

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

  create(person: Person): Promise<Person> {
    const personData = {
      name: person.name,
      email: person.email,
      companyId: person.companyId
    }

    return this.http.post(this.personUrl, personData, { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  edit(person: Person): Promise<any> {
    const personData = {
      name: person.name,
      email: person.email,
      companyId: person.companyId
    }

    return this.http.put(this.personUrlFor(person._id), personData, { headers: this.headers })
      .toPromise()
      .catch(this.handleError)
  }

  delete(personId: string): Promise<any> {
    return this.http.delete(this.personUrlFor(personId))
      .toPromise()
      .catch(this.handleError)
  }

  private peopleUrlFor(companyId: string): string {
    return `${this.baseUrl}/companies/${companyId}/people`
  }

  private personUrlFor(personId: string): string {
    return `${this.personUrl}/${personId}`
  }

  private handleError(error: Response | any) {
    console.error(error)
    debugger

    return Promise.reject('¯\_(ツ)_/¯')
  }
}
