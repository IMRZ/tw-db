
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionVariables } from "./FactionVariables";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace FactionVariablesOptionalOverrides {
  export const KEY = new CollectionKey("faction_variables_optional_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionVariableKey: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly difficultyLevel: string;
    readonly campaignType: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionVariableKey = values["faction_variable_key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this.difficultyLevel = values["difficulty_level"];
      this.campaignType = values["campaign_type"];
      this.value = values["value"];
    }
    
    get factionVariableKey(): FactionVariables.Entry | undefined {
      const collection = <FactionVariables.Entry[]>this.collectionCache.getCollection(FactionVariables.KEY, FactionVariables.Entry);
      return collection.find(entry => entry.factionVariableKey === this._factionVariableKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default FactionVariablesOptionalOverrides;
