
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalitiesReliabilityPolicies {
  export const KEY = new CollectionKey("cai_personalities_reliability_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly joinAllyBias: number;
    readonly _shortDescription: string;
    readonly _longDescription: string;
    readonly noWarDeclarationGiftThresholdMin: number;
    readonly noWarDeclarationGiftThresholdMax: number;
    readonly noWarDeclarationGiftBonus: number;
    readonly noRaidingGiftThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.joinAllyBias = values["join_ally_bias"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
      this.noWarDeclarationGiftThresholdMin = values["no_war_declaration_gift_threshold_min"];
      this.noWarDeclarationGiftThresholdMax = values["no_war_declaration_gift_threshold_max"];
      this.noWarDeclarationGiftBonus = values["no_war_declaration_gift_bonus"];
      this.noRaidingGiftThreshold = values["no_raiding_gift_threshold"];
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalitiesReliabilityPolicies;
