
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CaiHintProfileGroups } from "./CaiHintProfileGroups";

export namespace CaiFactionsToHintProfileGroups {
  export const KEY = new CollectionKey("cai_factions_to_hint_profile_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _hintProfileGroupKey: string;
    readonly campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._hintProfileGroupKey = values["hint_profile_group_key"];
      this.campaign = values["campaign"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get hintProfileGroupKey(): CaiHintProfileGroups.Entry | undefined {
      const collection = <CaiHintProfileGroups.Entry[]>this.collectionCache.getCollection(CaiHintProfileGroups.KEY, CaiHintProfileGroups.Entry);
      return collection.find(entry => entry.key === this._hintProfileGroupKey);
    }
  }
}

export default CaiFactionsToHintProfileGroups;
