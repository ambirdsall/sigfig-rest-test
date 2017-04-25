export class Person {
  _id: string
  name: string
  companyId: string
  email: string

  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.companyId = data.companyId
    this.email = data.email
  }
}
