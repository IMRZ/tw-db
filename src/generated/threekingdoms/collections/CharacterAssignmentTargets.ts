
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterAssignmentTargets {
  export const KEY = new CollectionKey("character_assignment_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterAssignmentTargets;
