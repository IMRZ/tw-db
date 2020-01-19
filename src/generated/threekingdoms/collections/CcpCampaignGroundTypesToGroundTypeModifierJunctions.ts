
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
import { GroundTypes } from "./GroundTypes";

export namespace CcpCampaignGroundTypesToGroundTypeModifierJunctions {
  export const KEY = new CollectionKey("ccp_campaign_ground_types_to_ground_type_modifier_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGt: string;
    readonly _groundType: string;
    readonly percentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGt = values["campaign_gt"];
      this._groundType = values["ground_type"];
      this.percentage = values["percentage"];
    }
    
    get campaignGt(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._campaignGt);
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
  }
}

export default CcpCampaignGroundTypesToGroundTypeModifierJunctions;
