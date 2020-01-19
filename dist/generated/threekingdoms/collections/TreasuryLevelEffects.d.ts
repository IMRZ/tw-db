import { CollectionCache, CollectionKey } from "../../../common";
import { TreasuryLevels } from "./TreasuryLevels";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace TreasuryLevelEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _level: string;
        readonly _effect: string;
        readonly _effectScope: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get level(): TreasuryLevels.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default TreasuryLevelEffects;
