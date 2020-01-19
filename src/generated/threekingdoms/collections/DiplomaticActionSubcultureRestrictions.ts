
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace DiplomaticActionSubcultureRestrictions {
  export const KEY = new CollectionKey("diplomatic_action_subculture_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subculture: string;
    readonly canMakeVassals: boolean;
    readonly canMakeClientStates: boolean;
    readonly canMakeConfederations: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subculture = values["subculture"];
      this.canMakeVassals = !!values["can_make_vassals"];
      this.canMakeClientStates = !!values["can_make_client_states"];
      this.canMakeConfederations = !!values["can_make_confederations"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default DiplomaticActionSubcultureRestrictions;
