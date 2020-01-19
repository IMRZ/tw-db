
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CeoTriggers } from "./CeoTriggers";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CampaignPayloadCeoTriggers {
  export const KEY = new CollectionKey("campaign_payload_ceo_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _trigger: string;
    readonly _targetManagerType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._trigger = values["trigger"];
      this._targetManagerType = values["target_manager_type"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get trigger(): CeoTriggers.Entry | undefined {
      const collection = <CeoTriggers.Entry[]>this.collectionCache.getCollection(CeoTriggers.KEY, CeoTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get targetManagerType(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._targetManagerType);
    }
  }
}

export default CampaignPayloadCeoTriggers;
