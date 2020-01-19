import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAttributes } from "./CampaignBonusValueIdsUnitAttributes";
import { UnitAttributeBattleContextJunctions } from "./UnitAttributeBattleContextJunctions";
export declare namespace EffectBonusValueUnitAttributeBattleContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitAttributeBattleContext: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitAttributes.Entry | undefined;
        get unitAttributeBattleContext(): UnitAttributeBattleContextJunctions.Entry | undefined;
    }
}
export default EffectBonusValueUnitAttributeBattleContextJunctions;
