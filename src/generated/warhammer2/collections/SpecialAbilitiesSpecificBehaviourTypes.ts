
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilitiesSpecificBehaviourTypes {
  export const KEY = new CollectionKey("special_abilities_specific_behaviour_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SpecialAbilitiesSpecificBehaviourTypes;
