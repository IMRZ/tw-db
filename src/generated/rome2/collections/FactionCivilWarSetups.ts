
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace FactionCivilWarSetups {
  export const KEY = new CollectionKey("faction_civil_war_setups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _primaryFaction: string;
    readonly _secondaryFaction: string;
    readonly factionNameOverridePrimaryHigh: string;
    readonly factionNameOverridePrimaryLow: string;
    readonly factionNameOverrideSecondaryHigh: string;
    readonly factionNameOverrideSecondaryLow: string;
    readonly factionNameOverrideVictory: string;
    readonly factionLeaderTitleOverrideVictory: string;
    readonly _secessionistFaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._primaryFaction = values["primary_faction"];
      this._secondaryFaction = values["secondary_faction"];
      this.factionNameOverridePrimaryHigh = values["faction_name_override_primary_high"];
      this.factionNameOverridePrimaryLow = values["faction_name_override_primary_low"];
      this.factionNameOverrideSecondaryHigh = values["faction_name_override_secondary_high"];
      this.factionNameOverrideSecondaryLow = values["faction_name_override_secondary_low"];
      this.factionNameOverrideVictory = values["faction_name_override_victory"];
      this.factionLeaderTitleOverrideVictory = values["faction_leader_title_override_victory"];
      this._secessionistFaction = values["secessionist_faction"];
    }
    
    get primaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._primaryFaction);
    }
    
    get secondaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._secondaryFaction);
    }
    
    get secessionistFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._secessionistFaction);
    }
  }
}

export default FactionCivilWarSetups;
