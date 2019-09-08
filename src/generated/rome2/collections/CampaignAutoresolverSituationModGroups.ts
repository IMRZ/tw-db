
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAutoresolverBattleSituations } from "./CampaignAutoresolverBattleSituations";
import { CampaignAutoresolverModGroupTargets } from "./CampaignAutoresolverModGroupTargets";
import { CampaignAutoresolverModGroups } from "./CampaignAutoresolverModGroups";

export namespace CampaignAutoresolverSituationModGroups {
  export const KEY = new CollectionKey("campaign_autoresolver_situation_mod_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _situationId: string;
    readonly _groupTargetId: string;
    readonly _groupId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._situationId = values["situation_id"];
      this._groupTargetId = values["group_target_id"];
      this._groupId = values["group_id"];
    }
    
    get situationId(): CampaignAutoresolverBattleSituations.Entry | undefined {
      const collection = <CampaignAutoresolverBattleSituations.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverBattleSituations.KEY, CampaignAutoresolverBattleSituations.Entry);
      return collection.find(entry => entry.id === this._situationId);
    }
    
    get groupTargetId(): CampaignAutoresolverModGroupTargets.Entry | undefined {
      const collection = <CampaignAutoresolverModGroupTargets.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverModGroupTargets.KEY, CampaignAutoresolverModGroupTargets.Entry);
      return collection.find(entry => entry.id === this._groupTargetId);
    }
    
    get groupId(): CampaignAutoresolverModGroups.Entry | undefined {
      const collection = <CampaignAutoresolverModGroups.Entry[]>this.collectionCache.getCollection(CampaignAutoresolverModGroups.KEY, CampaignAutoresolverModGroups.Entry);
      return collection.find(entry => entry.id === this._groupId);
    }
  }
}

export default CampaignAutoresolverSituationModGroups;
