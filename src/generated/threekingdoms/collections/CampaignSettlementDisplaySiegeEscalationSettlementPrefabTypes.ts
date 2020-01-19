
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSiegeEscalationLevels } from "./CampaignSiegeEscalationLevels";
import { PrefabTypes } from "./PrefabTypes";

export namespace CampaignSettlementDisplaySiegeEscalationSettlementPrefabTypes {
  export const KEY = new CollectionKey("campaign_settlement_display_siege_escalation_settlement_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _level: number;
    readonly _prefabTypeNormal: string;
    readonly _prefabTypeSiege: string;
    readonly _prefabTypeRazed: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._level = values["level"];
      this._prefabTypeNormal = values["prefab_type_normal"];
      this._prefabTypeSiege = values["prefab_type_siege"];
      this._prefabTypeRazed = values["prefab_type_razed"];
    }
    
    get level(): CampaignSiegeEscalationLevels.Entry | undefined {
      const collection = <CampaignSiegeEscalationLevels.Entry[]>this.collectionCache.getCollection(CampaignSiegeEscalationLevels.KEY, CampaignSiegeEscalationLevels.Entry);
      return collection.find(entry => entry.level === this._level);
    }
    
    get prefabTypeNormal(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabTypeNormal);
    }
    
    get prefabTypeSiege(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabTypeSiege);
    }
    
    get prefabTypeRazed(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabTypeRazed);
    }
  }
}

export default CampaignSettlementDisplaySiegeEscalationSettlementPrefabTypes;
