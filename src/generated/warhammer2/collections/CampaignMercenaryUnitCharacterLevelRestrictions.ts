
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";

export namespace CampaignMercenaryUnitCharacterLevelRestrictions {
  export const KEY = new CollectionKey("campaign_mercenary_unit_character_level_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly characterLevel: number;
    readonly _factionOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this.characterLevel = values["character_level"];
      this._factionOverride = values["faction_override"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get factionOverride(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionOverride);
    }
  }
}

export default CampaignMercenaryUnitCharacterLevelRestrictions;
