export class Applicant {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }

  export interface Applicant{
        idemployee: number,
        username: string,
        userimage: string,
        idjob: number,
        rankUser: number,
        salary: number,
        counteroffer: number,
        postedreason: string,
        counterofferreason: string
}

export interface MemberTeam{ //ver que info voy agregar para mostrar en cada pagina
        idemployee: number,
        username: string,
        userimage: string,
        idjob: number,
        rankUser: number,
        salary: number,
        counteroffer: number,
        postedreason: string,
        counterofferreason: string
}
  