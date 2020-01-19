
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSiegeEscalationLevels } from "./CampaignSiegeEscalationLevels";
import { BmdExportTypes } from "./BmdExportTypes";
import { PrefabTypes } from "./PrefabTypes";

export namespace CampaignSettlementDisplaySiegeEscalationBuildingSlotPrefabTypes {
  export const KEY = new CollectionKey("campaign_settlement_display_siege_escalation_building_slot_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _level: number;
    readonly _bmdExportType: string;
    readonly _prefabTypeNormal: string;
    readonly _prefabTypeSiege: string;
    readonly _prefabTypeRazed: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._level = values["level"];
      this._bmdExportType = values["bmd_export_type"];
      this._prefabTypeNormal = values["prefab_type_normal"];
      this._prefabTypeSiege = values["prefab_type_siege"];
      this._prefabTypeRazed = values["prefab_type_razed"];
    }
    
    get level(): CampaignSiegeEscalationLevels.Entry | undefined {
      const collection = <CampaignSiegeEscalationLevels.Entry[]>this.collectionCache.getCollection(CampaignSiegeEscalationLevels.KEY, CampaignSiegeEscalationLevels.Entry);
      return collection.find(entry => entry.level === this._level);
    }
    
    get bmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdExportType);
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

export default CampaignSettlementDisplaySiegeEscalationBuildingSlotPrefabTypes;
