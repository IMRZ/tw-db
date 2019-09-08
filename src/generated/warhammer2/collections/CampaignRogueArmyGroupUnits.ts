
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmyGroups } from "./CampaignRogueArmyGroups";
import { MainUnits } from "./MainUnits";

export namespace CampaignRogueArmyGroupUnits {
  export const KEY = new CollectionKey("campaign_rogue_army_group_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _group: string;
    readonly _unit: string;
    readonly xp: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._group = values["group"];
      this._unit = values["unit"];
      this.xp = values["xp"];
    }
    
    get group(): CampaignRogueArmyGroups.Entry | undefined {
      const collection = <CampaignRogueArmyGroups.Entry[]>this.collectionCache.getCollection(CampaignRogueArmyGroups.KEY, CampaignRogueArmyGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default CampaignRogueArmyGroupUnits;
