
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignGroundTypes {
  export const KEY = new CollectionKey("campaign_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly movementCost: number;
    readonly canAmbush: boolean;
    readonly onscreenName: string;
    readonly isSea: boolean;
    readonly icon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.movementCost = values["movement_cost"];
      this.canAmbush = !!values["can_ambush"];
      this.onscreenName = values["onscreen_name"];
      this.isSea = !!values["is_sea"];
      this.icon = values["icon"];
    }
    
  }
}

export default CampaignGroundTypes;
