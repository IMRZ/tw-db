
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStormTypes {
  export const KEY = new CollectionKey("campaign_storm_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly forLand: boolean;
    readonly forSea: boolean;
    readonly canMove: boolean;
    readonly canDecay: boolean;
    readonly canSpawnOverCharacter: boolean;
    readonly respectExcludedRegionsTable: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.forLand = !!values["for_land"];
      this.forSea = !!values["for_sea"];
      this.canMove = !!values["can_move"];
      this.canDecay = !!values["can_decay"];
      this.canSpawnOverCharacter = !!values["can_spawn_over_character"];
      this.respectExcludedRegionsTable = !!values["respect_excluded_regions_table"];
    }
    
  }
}

export default CampaignStormTypes;
