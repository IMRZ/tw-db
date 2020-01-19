
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";

export namespace CampaignBorderMaterials {
  export const KEY = new CollectionKey("campaign_border_materials");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly material: string;
    readonly overlayMaterial: string;
    readonly _colour1: string;
    readonly _colour2: string;
    readonly _colour3: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.material = values["material"];
      this.overlayMaterial = values["overlay_material"];
      this._colour1 = values["colour_1"];
      this._colour2 = values["colour_2"];
      this._colour3 = values["colour_3"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get colour1(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour1);
    }
    
    get colour2(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour2);
    }
    
    get colour3(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour3);
    }
  }
}

export default CampaignBorderMaterials;
