
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace CampaignMercenaryUnitCharacterLevelRestrictions {
  export const KEY = new CollectionKey("campaign_mercenary_unit_character_level_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly characterLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this.characterLevel = values["character_level"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default CampaignMercenaryUnitCharacterLevelRestrictions;
