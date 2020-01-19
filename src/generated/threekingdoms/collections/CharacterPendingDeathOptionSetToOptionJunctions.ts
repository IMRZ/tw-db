
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterPendingDeathOptionSets } from "./CharacterPendingDeathOptionSets";
import { CharacterPendingDeathOptions } from "./CharacterPendingDeathOptions";

export namespace CharacterPendingDeathOptionSetToOptionJunctions {
  export const KEY = new CollectionKey("character_pending_death_option_set_to_option_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _optionSet: string;
    readonly _option: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._optionSet = values["option_set"];
      this._option = values["option"];
    }
    
    get optionSet(): CharacterPendingDeathOptionSets.Entry | undefined {
      const collection = <CharacterPendingDeathOptionSets.Entry[]>this.collectionCache.getCollection(CharacterPendingDeathOptionSets.KEY, CharacterPendingDeathOptionSets.Entry);
      return collection.find(entry => entry.key === this._optionSet);
    }
    
    get option(): CharacterPendingDeathOptions.Entry | undefined {
      const collection = <CharacterPendingDeathOptions.Entry[]>this.collectionCache.getCollection(CharacterPendingDeathOptions.KEY, CharacterPendingDeathOptions.Entry);
      return collection.find(entry => entry.key === this._option);
    }
  }
}

export default CharacterPendingDeathOptionSetToOptionJunctions;
