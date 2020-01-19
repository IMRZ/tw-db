
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";

export namespace CampaignAreasOfInterest {
  export const KEY = new CollectionKey("campaign_areas_of_interest");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _areaOfInterest: string;
    readonly _group: string;
    readonly title: string;
    readonly description: string;
    readonly icon: string;
    readonly splineMaterial: string;
    readonly _splineColour: string;
    readonly iconHeightOffset: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._areaOfInterest = values["area_of_interest"];
      this._group = values["group"];
      this.title = values["title"];
      this.description = values["description"];
      this.icon = values["icon"];
      this.splineMaterial = values["spline_material"];
      this._splineColour = values["spline_colour"];
      this.iconHeightOffset = values["icon_height_offset"];
    }
    
    get areaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined {
      const collection = <CampaignMapAreasOfInterest.Entry[]>this.collectionCache.getCollection(CampaignMapAreasOfInterest.KEY, CampaignMapAreasOfInterest.Entry);
      return collection.find(entry => entry.key === this._areaOfInterest);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get splineColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._splineColour);
    }
  }
}

export default CampaignAreasOfInterest;
