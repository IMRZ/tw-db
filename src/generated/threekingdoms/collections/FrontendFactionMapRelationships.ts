
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { UiColours } from "./UiColours";
import { Campaigns } from "./Campaigns";

export namespace FrontendFactionMapRelationships {
  export const KEY = new CollectionKey("frontend_faction_map_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _primaryFaction: string;
    readonly _secondaryFaction: string;
    readonly _relationshipColour: string;
    readonly _campaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._primaryFaction = values["primary_faction"];
      this._secondaryFaction = values["secondary_faction"];
      this._relationshipColour = values["relationship_colour"];
      this._campaignKey = values["campaign_key"];
    }
    
    get primaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._primaryFaction);
    }
    
    get secondaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._secondaryFaction);
    }
    
    get relationshipColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._relationshipColour);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default FrontendFactionMapRelationships;
