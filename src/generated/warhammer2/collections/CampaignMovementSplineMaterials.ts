
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMovementSplineMaterials {
  export const KEY = new CollectionKey("campaign_movement_spline_materials");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly shaftMaterial: string;
    readonly headMaterial: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.shaftMaterial = values["shaft_material"];
      this.headMaterial = values["head_material"];
    }
    
  }
}

export default CampaignMovementSplineMaterials;
