
import { CollectionCache, CollectionKey } from "../../../common";
import { ContextualDiplomacyEventSets } from "./ContextualDiplomacyEventSets";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { ContextualDiplomacyEventScopes } from "./ContextualDiplomacyEventScopes";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";

export namespace ContextualDiplomacyEventSetItems {
  export const KEY = new CollectionKey("contextual_diplomacy_event_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _requiredTreatyComponents: string;
    readonly _scope: string;
    readonly _scopeRequiredTreatyComponents: string;
    readonly _diplomacyEvent: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._requiredTreatyComponents = values["required_treaty_components"];
      this._scope = values["scope"];
      this._scopeRequiredTreatyComponents = values["scope_required_treaty_components"];
      this._diplomacyEvent = values["diplomacy_event"];
      this.priority = values["priority"];
    }
    
    get set(): ContextualDiplomacyEventSets.Entry | undefined {
      const collection = <ContextualDiplomacyEventSets.Entry[]>this.collectionCache.getCollection(ContextualDiplomacyEventSets.KEY, ContextualDiplomacyEventSets.Entry);
      return collection.find(entry => entry.key === this._set);
    }
    
    get requiredTreatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._requiredTreatyComponents);
    }
    
    get scope(): ContextualDiplomacyEventScopes.Entry | undefined {
      const collection = <ContextualDiplomacyEventScopes.Entry[]>this.collectionCache.getCollection(ContextualDiplomacyEventScopes.KEY, ContextualDiplomacyEventScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
    
    get scopeRequiredTreatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._scopeRequiredTreatyComponents);
    }
    
    get diplomacyEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._diplomacyEvent);
    }
  }
}

export default ContextualDiplomacyEventSetItems;
