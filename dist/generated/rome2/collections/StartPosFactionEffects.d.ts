import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace StartPosFactionEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _startPosFaction: number;
        readonly _effect: string;
        readonly effectValue: number;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get startPosFaction(): StartPosFactions.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default StartPosFactionEffects;
