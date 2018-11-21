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
        idjob: number,
        jobtitle: string,
        idemployee: number,
        employeeName: string,
        employeeImage: string,
        employeeRank: number,
        salary: number,
        counteroffer: number,
        postedreason: string,
        counterofferreason: string,
        currentMilestone: number,
        position: string,
        numbermilestones: number,
        idemployer: number,
        employerName: string,
        employerImage: string,
        employerRank: number,

}
  