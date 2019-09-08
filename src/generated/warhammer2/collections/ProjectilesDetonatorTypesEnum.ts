
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectilesDetonatorTypesEnum {
  export const KEY = new CollectionKey("projectiles_detonator_types_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly detonatorType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.detonatorType = values["detonator_type"];
    }
    
  }
}

export default ProjectilesDetonatorTypesEnum;
