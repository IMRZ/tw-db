
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { Factions } from "./Factions";

export namespace CampaignStancesFactionsJunctions {
  export const KEY = new CollectionKey("campaign_stances_factions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this._faction = values["faction"];
    }
    
    get stance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CampaignStancesFactionsJunctions;
