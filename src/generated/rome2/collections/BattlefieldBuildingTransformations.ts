
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldBuildingTransformations {
  export const KEY = new CollectionKey("battlefield_building_transformations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly transformation: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.transformation = values["transformation"];
      this.description = values["description"];
    }
    
  }
}

export default BattlefieldBuildingTransformations;
