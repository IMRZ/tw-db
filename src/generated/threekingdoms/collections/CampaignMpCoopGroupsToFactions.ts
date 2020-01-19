
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignMpCoopGroups } from "./CampaignMpCoopGroups";

export namespace CampaignMpCoopGroupsToFactions {
  export const KEY = new CollectionKey("campaign_mp_coop_groups_to_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _mpCoopGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._mpCoopGroup = values["mp_coop_group"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get mpCoopGroup(): CampaignMpCoopGroups.Entry | undefined {
      const collection = <CampaignMpCoopGroups.Entry[]>this.collectionCache.getCollection(CampaignMpCoopGroups.KEY, CampaignMpCoopGroups.Entry);
      return collection.find(entry => entry.key === this._mpCoopGroup);
    }
  }
}

export default CampaignMpCoopGroupsToFactions;
