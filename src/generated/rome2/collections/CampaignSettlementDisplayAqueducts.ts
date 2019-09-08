
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";

export namespace CampaignSettlementDisplayAqueducts {
  export const KEY = new CollectionKey("campaign_settlement_display_aqueducts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionKey: string;
    readonly buildingPath: string;
    readonly positionXMap: number;
    readonly positionYMap: number;
    readonly positionZHeight: number;
    readonly rotationCwRadians: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionKey = values["region_key"];
      this.buildingPath = values["building_path"];
      this.positionXMap = values["position_x_map"];
      this.positionYMap = values["position_y_map"];
      this.positionZHeight = values["position_z_height"];
      this.rotationCwRadians = values["rotation_cw_radians"];
    }
    
    get regionKey(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._regionKey);
    }
  }
}

export default CampaignSettlementDisplayAqueducts;
