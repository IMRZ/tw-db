
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectilesDetonationTypesEnum {
  export const KEY = new CollectionKey("projectiles_detonation_types_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ProjectilesDetonationTypesEnum;
