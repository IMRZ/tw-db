
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";
import { Factions } from "./Factions";

export namespace WorldPowerTokens {
  export const KEY = new CollectionKey("world_power_tokens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _owningFactionEffectBundle: string;
    readonly _gainedDiplomaticDeal: string;
    readonly _gainedDiplomaticDealFaction: string;
    readonly _lostDiplomaticDeal: string;
    readonly _lostDiplomaticDealFaction: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly captureChanceOnCapitalConquest: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._owningFactionEffectBundle = values["owning_faction_effect_bundle"];
      this._gainedDiplomaticDeal = values["gained_diplomatic_deal"];
      this._gainedDiplomaticDealFaction = values["gained_diplomatic_deal_faction"];
      this._lostDiplomaticDeal = values["lost_diplomatic_deal"];
      this._lostDiplomaticDealFaction = values["lost_diplomatic_deal_faction"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.captureChanceOnCapitalConquest = values["capture_chance_on_capital_conquest"];
    }
    
    get owningFactionEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._owningFactionEffectBundle);
    }
    
    get gainedDiplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealSituations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealSituations.KEY, CampaignDiplomacyAutomaticDealSituations.Entry);
      return collection.find(entry => entry.situation === this._gainedDiplomaticDeal);
    }
    
    get gainedDiplomaticDealFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._gainedDiplomaticDealFaction);
    }
    
    get lostDiplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealSituations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealSituations.KEY, CampaignDiplomacyAutomaticDealSituations.Entry);
      return collection.find(entry => entry.situation === this._lostDiplomaticDeal);
    }
    
    get lostDiplomaticDealFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._lostDiplomaticDealFaction);
    }
  }
}

export default WorldPowerTokens;
