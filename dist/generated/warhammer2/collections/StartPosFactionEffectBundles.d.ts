import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { EffectBundles } from "./EffectBundles";
export declare namespace StartPosFactionEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _startPosFaction: number;
        readonly _effectBundle: string;
        readonly duration: number;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly startPosFaction: StartPosFactions.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default StartPosFactionEffectBundles;
