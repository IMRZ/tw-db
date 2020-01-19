
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace DiplomaticActionFactionRestrictions {
  export const KEY = new CollectionKey("diplomatic_action_faction_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly canMakeVassals: boolean;
    readonly canMakeClientStates: boolean;
    readonly canMakeConfederations: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.canMakeVassals = !!values["can_make_vassals"];
      this.canMakeClientStates = !!values["can_make_client_states"];
      this.canMakeConfederations = !!values["can_make_confederations"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default DiplomaticActionFactionRestrictions;
