
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";

export namespace CampaignSettlementDisplayBuildingTrees {
  export const KEY = new CollectionKey("campaign_settlement_display_building_trees");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly rigidLookupKey: string;
    readonly _climateType: string;
    readonly buildingPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.rigidLookupKey = values["rigid_lookup_key"];
      this._climateType = values["climate_type"];
      this.buildingPath = values["building_path"];
    }
    
    get climateType(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climateType);
    }
  }
}

export default CampaignSettlementDisplayBuildingTrees;
