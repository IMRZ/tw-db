import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsWorldPowerTokenRecords } from "./CampaignBonusValueIdsWorldPowerTokenRecords";
import { WorldPowerTokens } from "./WorldPowerTokens";
export declare namespace EffectBonusValueIdsWorldPowerTokenRecords {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _worldPowerTokenRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsWorldPowerTokenRecords.Entry | undefined;
        get worldPowerTokenRecord(): WorldPowerTokens.Entry | undefined;
    }
}
export default EffectBonusValueIdsWorldPowerTokenRecords;
