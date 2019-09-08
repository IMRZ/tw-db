
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAutoresolverModGroupTargets {
  export const KEY = new CollectionKey("campaign_autoresolver_mod_group_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly mechanicTarget: string;
    readonly allianceTarget: string;
    readonly playerTarget: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.mechanicTarget = values["mechanic_target"];
      this.allianceTarget = values["alliance_target"];
      this.playerTarget = values["player_target"];
    }
    
  }
}

export default CampaignAutoresolverModGroupTargets;
