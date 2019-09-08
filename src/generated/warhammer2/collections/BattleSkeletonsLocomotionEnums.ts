
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleSkeletonsLocomotionEnums {
  export const KEY = new CollectionKey("battle_skeletons_locomotion_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleSkeletonsLocomotionEnums;
