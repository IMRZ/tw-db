import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { EffectBundles } from "./EffectBundles";
export declare namespace StartPosStartingGeneralOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _general: number;
        readonly _replacesGeneral: number;
        readonly turnsLocked: number;
        readonly precedence: number;
        readonly _frontendFactionLeader: string;
        readonly _effectBundle: string;
        readonly uiTooltipLockReason: string;
        constructor(collectionCache: CollectionCache, values: any);
        get general(): StartPosCharacters.Entry | undefined;
        get replacesGeneral(): StartPosCharacters.Entry | undefined;
        get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default StartPosStartingGeneralOptions;
