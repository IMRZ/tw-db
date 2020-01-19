import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEffectLists } from "./CeoEffectLists";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { GameModes } from "./GameModes";
export declare namespace CeoEffectListToEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectList: string;
        readonly _effect: string;
        readonly value: number;
        readonly _effectScope: string;
        readonly autoId: number;
        readonly _optionalOnlyInGameMode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectList(): CeoEffectLists.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
        get optionalOnlyInGameMode(): GameModes.Entry | undefined;
    }
}
export default CeoEffectListToEffects;
