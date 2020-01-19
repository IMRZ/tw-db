
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";

export namespace CaiDiplomacyComponentEvents {
  export const KEY = new CollectionKey("cai_diplomacy_component_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomaticComponent: string;
    readonly _signedProposer: string;
    readonly _signedRecipient: string;
    readonly _pastProposer: string;
    readonly _pastRecipient: string;
    readonly _cancelled: string;
    readonly _broken: string;
    readonly _brokenEarly: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomaticComponent = values["diplomatic_component"];
      this._signedProposer = values["signed_proposer"];
      this._signedRecipient = values["signed_recipient"];
      this._pastProposer = values["past_proposer"];
      this._pastRecipient = values["past_recipient"];
      this._cancelled = values["cancelled"];
      this._broken = values["broken"];
      this._brokenEarly = values["broken_early"];
    }
    
    get diplomaticComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._diplomaticComponent);
    }
    
    get signedProposer(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._signedProposer);
    }
    
    get signedRecipient(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._signedRecipient);
    }
    
    get pastProposer(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._pastProposer);
    }
    
    get pastRecipient(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._pastRecipient);
    }
    
    get cancelled(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._cancelled);
    }
    
    get broken(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._broken);
    }
    
    get brokenEarly(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._brokenEarly);
    }
  }
}

export default CaiDiplomacyComponentEvents;
