
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiManagers } from "./CampaignAiManagers";
import { CampaignAiBehaviours } from "./CampaignAiBehaviours";

export namespace CampaignAiManagerBehaviourJunctions {
  export const KEY = new CollectionKey("campaign_ai_manager_behaviour_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _manager: string;
    readonly _behaviour: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._manager = values["manager"];
      this._behaviour = values["behaviour"];
      this.priority = values["priority"];
    }
    
    get manager(): CampaignAiManagers.Entry | undefined {
      const collection = <CampaignAiManagers.Entry[]>this.collectionCache.getCollection(CampaignAiManagers.KEY, CampaignAiManagers.Entry);
      return collection.find(entry => entry.manager === this._manager);
    }
    
    get behaviour(): CampaignAiBehaviours.Entry | undefined {
      const collection = <CampaignAiBehaviours.Entry[]>this.collectionCache.getCollection(CampaignAiBehaviours.KEY, CampaignAiBehaviours.Entry);
      return collection.find(entry => entry.behaviour === this._behaviour);
    }
  }
}

export default CampaignAiManagerBehaviourJunctions;
