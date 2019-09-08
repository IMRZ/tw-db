
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { UnitAttributes } from "./UnitAttributes";

export namespace BattleContextUnitAttributeJunctions {
  export const KEY = new CollectionKey("battle_context_unit_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battleContext: string;
    readonly _unitAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battleContext = values["battle_context"];
      this._unitAttribute = values["unit_attribute"];
    }
    
    get battleContext(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContext);
    }
    
    get unitAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._unitAttribute);
    }
  }
}

export default BattleContextUnitAttributeJunctions;
