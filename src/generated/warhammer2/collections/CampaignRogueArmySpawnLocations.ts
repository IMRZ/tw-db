
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmySpawnGroups } from "./CampaignRogueArmySpawnGroups";

export namespace CampaignRogueArmySpawnLocations {
  export const KEY = new CollectionKey("campaign_rogue_army_spawn_locations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _group: string;
    readonly positionX: number;
    readonly positionY: number;
    readonly radius: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._group = values["group"];
      this.positionX = values["position_x"];
      this.positionY = values["position_y"];
      this.radius = values["radius"];
    }
    
    get group(): CampaignRogueArmySpawnGroups.Entry | undefined {
      const collection = <CampaignRogueArmySpawnGroups.Entry[]>this.collectionCache.getCollection(CampaignRogueArmySpawnGroups.KEY, CampaignRogueArmySpawnGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default CampaignRogueArmySpawnLocations;
