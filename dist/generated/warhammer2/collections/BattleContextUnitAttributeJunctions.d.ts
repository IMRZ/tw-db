import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace BattleContextUnitAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleContext: string;
        readonly _unitAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContext: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly unitAttribute: UnitAttributes.Entry | undefined;
    }
}
export default BattleContextUnitAttributeJunctions;
