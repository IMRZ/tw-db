
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";

export namespace CampaignMovementSplineMaterials {
  export const KEY = new CollectionKey("campaign_movement_spline_materials");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly material: string;
    readonly width: number;
    readonly maxSubdivisions: number;
    readonly _baseColour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.material = values["material"];
      this.width = values["width"];
      this.maxSubdivisions = values["max_subdivisions"];
      this._baseColour = values["base_colour"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get baseColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._baseColour);
    }
  }
}

export default CampaignMovementSplineMaterials;
