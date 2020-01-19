
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { CampaignGroundTypes } from "./CampaignGroundTypes";

export namespace CampaignGroundTypesClimateOverrides {
  export const KEY = new CollectionKey("campaign_ground_types_climate_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _climate: string;
    readonly _groundType: string;
    readonly onscreenNameOverride: string;
    readonly iconOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._climate = values["climate"];
      this._groundType = values["ground_type"];
      this.onscreenNameOverride = values["onscreen_name_override"];
      this.iconOverride = values["icon_override"];
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
    
    get groundType(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
  }
}

export default CampaignGroundTypesClimateOverrides;
