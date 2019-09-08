
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectilesSpinTypeEnum {
  export const KEY = new CollectionKey("projectiles_spin_type_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ProjectilesSpinTypeEnum;
