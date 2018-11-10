export class JobDetail {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }

  export interface JobDetail{
      id: number,
      idemployer: number,
      mode: number,
      state: number,
      idlocation: number,
      title: string,
      description: string,
      jobcost: number,
      jobcostcovered: number,
      dateposted: string,
      datestart: string,
      dateend: string,
      datepostend: string,
      numbervacancies: number,
      createdAt: string,
      updatedAt: string
  }
  