
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiDiplomacyEvents {
  export const KEY = new CollectionKey("cai_diplomacy_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly transitive: boolean;
    readonly _diplomaticFactorGroupActive: string;
    readonly _diplomaticFactorGroupInactive: string;
    readonly strategicThreatMultiplierMod: number;
    readonly _diplomaticFactorGroupActiveOurFriends: string;
    readonly _diplomaticFactorGroupActiveOurEnemies: string;
    readonly _diplomaticFactorGroupInactiveOurFriends: string;
    readonly _diplomaticFactorGroupInactiveOurEnemies: string;
    readonly stanceUpdateRequired: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.transitive = !!values["transitive"];
      this._diplomaticFactorGroupActive = values["diplomatic_factor_group_active"];
      this._diplomaticFactorGroupInactive = values["diplomatic_factor_group_inactive"];
      this.strategicThreatMultiplierMod = values["strategic_threat_multiplier_mod"];
      this._diplomaticFactorGroupActiveOurFriends = values["diplomatic_factor_group_active_our_friends"];
      this._diplomaticFactorGroupActiveOurEnemies = values["diplomatic_factor_group_active_our_enemies"];
      this._diplomaticFactorGroupInactiveOurFriends = values["diplomatic_factor_group_inactive_our_friends"];
      this._diplomaticFactorGroupInactiveOurEnemies = values["diplomatic_factor_group_inactive_our_enemies"];
      this.stanceUpdateRequired = !!values["stance_update_required"];
    }
    
    get diplomaticFactorGroupActive(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupActive);
    }
    
    get diplomaticFactorGroupInactive(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupInactive);
    }
    
    get diplomaticFactorGroupActiveOurFriends(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupActiveOurFriends);
    }
    
    get diplomaticFactorGroupActiveOurEnemies(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupActiveOurEnemies);
    }
    
    get diplomaticFactorGroupInactiveOurFriends(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupInactiveOurFriends);
    }
    
    get diplomaticFactorGroupInactiveOurEnemies(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupInactiveOurEnemies);
    }
  }
}

export default CaiDiplomacyEvents;
