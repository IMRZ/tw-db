
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadComponentTypes } from "./CampaignPayloadComponentTypes";
import { CampaignPayloadPossibleReasons } from "./CampaignPayloadPossibleReasons";

export namespace CampaignPayloadComponentTypeToPossibleReasons {
  export const KEY = new CollectionKey("campaign_payload_component_type_to_possible_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _type: string;
    readonly _reason: string;
    readonly localisedText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._type = values["type"];
      this._reason = values["reason"];
      this.localisedText = values["localised_text"];
    }
    
    get type(): CampaignPayloadComponentTypes.Entry | undefined {
      const collection = <CampaignPayloadComponentTypes.Entry[]>this.collectionCache.getCollection(CampaignPayloadComponentTypes.KEY, CampaignPayloadComponentTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get reason(): CampaignPayloadPossibleReasons.Entry | undefined {
      const collection = <CampaignPayloadPossibleReasons.Entry[]>this.collectionCache.getCollection(CampaignPayloadPossibleReasons.KEY, CampaignPayloadPossibleReasons.Entry);
      return collection.find(entry => entry.reason === this._reason);
    }
  }
}

export default CampaignPayloadComponentTypeToPossibleReasons;
