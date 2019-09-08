
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignRogueArmyGroups } from "./CampaignRogueArmyGroups";

export namespace CampaignRogueArmySetups {
  export const KEY = new CollectionKey("campaign_rogue_army_setups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly difficultyLevel: number;
    readonly _group: string;
    readonly budget: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.difficultyLevel = values["difficulty_level"];
      this._group = values["group"];
      this.budget = values["budget"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get group(): CampaignRogueArmyGroups.Entry | undefined {
      const collection = <CampaignRogueArmyGroups.Entry[]>this.collectionCache.getCollection(CampaignRogueArmyGroups.KEY, CampaignRogueArmyGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default CampaignRogueArmySetups;
