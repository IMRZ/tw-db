
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Formations {
  export const KEY = new CollectionKey("formations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly formation: string;
    readonly isNaval: boolean;
    readonly isArmy: boolean;
    readonly name: string;
    readonly tooltip: string;
    readonly description: string;
    readonly iconName: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.formation = values["formation"];
      this.isNaval = !!values["is_naval"];
      this.isArmy = !!values["is_army"];
      this.name = values["name"];
      this.tooltip = values["tooltip"];
      this.description = values["description"];
      this.iconName = values["icon_name"];
      this.order = values["order"];
    }
    
  }
}

export default Formations;
