
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace CampaignPayloadRelationshipTriggers {
  export const KEY = new CollectionKey("campaign_payload_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _triggerSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._triggerSet = values["trigger_set"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get triggerSet(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggerSet);
    }
  }
}

export default CampaignPayloadRelationshipTriggers;
