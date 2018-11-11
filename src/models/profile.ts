export class Profile {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }

  export interface Profile{
    id: number,
    idlocation: number,
    idstate: number,
    typenationalidentifier: number,
    nationalidentifier: string,
    name: string,
    lastname: string,
    email: string,
    birthdate: string,
    direction: string,
    gender: string,
    nationality: string,
    availablemoney: number,
    rank: number,
    about: string,
    image: string,
    cellphone: string,
  }
  