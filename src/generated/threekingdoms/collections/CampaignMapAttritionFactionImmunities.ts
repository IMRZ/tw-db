
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { Factions } from "./Factions";

export namespace CampaignMapAttritionFactionImmunities {
  export const KEY = new CollectionKey("campaign_map_attrition_faction_immunities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attrition: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attrition = values["attrition"];
      this._faction = values["faction"];
    }
    
    get attrition(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attrition);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CampaignMapAttritionFactionImmunities;
