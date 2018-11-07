/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Item {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Item {
    id: number,
    idemployer: number,
    mode: number,
    state: number,
    idlocation: number  ,
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
