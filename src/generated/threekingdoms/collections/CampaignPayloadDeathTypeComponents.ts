
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadDeathTypeComponentTypes } from "./CampaignPayloadDeathTypeComponentTypes";
import { DeathTypes } from "./DeathTypes";

export namespace CampaignPayloadDeathTypeComponents {
  export const KEY = new CollectionKey("campaign_payload_death_type_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _component: string;
    readonly _deathType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._component = values["component"];
      this._deathType = values["death_type"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get component(): CampaignPayloadDeathTypeComponentTypes.Entry | undefined {
      const collection = <CampaignPayloadDeathTypeComponentTypes.Entry[]>this.collectionCache.getCollection(CampaignPayloadDeathTypeComponentTypes.KEY, CampaignPayloadDeathTypeComponentTypes.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get deathType(): DeathTypes.Entry | undefined {
      const collection = <DeathTypes.Entry[]>this.collectionCache.getCollection(DeathTypes.KEY, DeathTypes.Entry);
      return collection.find(entry => entry.key === this._deathType);
    }
  }
}

export default CampaignPayloadDeathTypeComponents;
