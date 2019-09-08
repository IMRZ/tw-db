
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
import { CampaignVfxDescriptions } from "./CampaignVfxDescriptions";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Agents } from "./Agents";

export namespace CampaignVfxLookups {
  export const KEY = new CollectionKey("campaign_vfx_lookups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _vfxEvent: string;
    readonly _vfxDescription: string;
    readonly _factionFilter: string;
    readonly _cultureFilter: string;
    readonly _agentFilter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._vfxEvent = values["vfx_event"];
      this._vfxDescription = values["vfx_description"];
      this._factionFilter = values["faction_filter"];
      this._cultureFilter = values["culture_filter"];
      this._agentFilter = values["agent_filter"];
    }
    
    get vfxEvent(): CampaignVfxCampaignVfxEventIds.Entry | undefined {
      const collection = <CampaignVfxCampaignVfxEventIds.Entry[]>this.collectionCache.getCollection(CampaignVfxCampaignVfxEventIds.KEY, CampaignVfxCampaignVfxEventIds.Entry);
      return collection.find(entry => entry.campaignVfxEvent === this._vfxEvent);
    }
    
    get vfxDescription(): CampaignVfxDescriptions.Entry | undefined {
      const collection = <CampaignVfxDescriptions.Entry[]>this.collectionCache.getCollection(CampaignVfxDescriptions.KEY, CampaignVfxDescriptions.Entry);
      return collection.find(entry => entry.key === this._vfxDescription);
    }
    
    get factionFilter(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionFilter);
    }
    
    get cultureFilter(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._cultureFilter);
    }
    
    get agentFilter(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentFilter);
    }
  }
}

export default CampaignVfxLookups;
