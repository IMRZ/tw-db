
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Abilities {
  export const KEY = new CollectionKey("abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ability: string;
    readonly cannotFail: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ability = values["ability"];
      this.cannotFail = !!values["cannot_fail"];
    }
    
  }
}

export default Abilities;
