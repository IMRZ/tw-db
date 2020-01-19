
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { Ceos } from "./Ceos";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CampaignPayloadGrantCeos {
  export const KEY = new CollectionKey("campaign_payload_grant_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _ceo: string;
    readonly _targetManagerType: string;
    readonly isRemoval: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._ceo = values["ceo"];
      this._targetManagerType = values["target_manager_type"];
      this.isRemoval = !!values["is_removal"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
    
    get targetManagerType(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._targetManagerType);
    }
  }
}

export default CampaignPayloadGrantCeos;
