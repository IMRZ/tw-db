
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmySpawnGroups } from "./CampaignRogueArmySpawnGroups";
import { Regions } from "./Regions";

export namespace CampaignRogueArmySpawnRegions {
  export const KEY = new CollectionKey("campaign_rogue_army_spawn_regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _group: string;
    readonly _region: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._group = values["group"];
      this._region = values["region"];
    }
    
    get group(): CampaignRogueArmySpawnGroups.Entry | undefined {
      const collection = <CampaignRogueArmySpawnGroups.Entry[]>this.collectionCache.getCollection(CampaignRogueArmySpawnGroups.KEY, CampaignRogueArmySpawnGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
  }
}

export default CampaignRogueArmySpawnRegions;
