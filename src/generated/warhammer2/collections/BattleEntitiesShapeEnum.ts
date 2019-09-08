
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleEntitiesShapeEnum {
  export const KEY = new CollectionKey("battle_entities_shape_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleEntitiesShapeEnum;
