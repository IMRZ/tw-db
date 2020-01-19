import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace UnitAttributeBattleContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleContext: string;
        readonly _unitAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleContext(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get unitAttribute(): UnitAttributes.Entry | undefined;
    }
}
export default UnitAttributeBattleContextJunctions;
