import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace ActionResults {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _actorEffectBundle: string;
        readonly _targetEffectBundle: string;
        readonly actorEffectBundleTurns: number;
        readonly targetEffectBundleTurns: number;
        constructor(collectionCache: CollectionCache, values: any);
        get actorEffectBundle(): EffectBundles.Entry | undefined;
        get targetEffectBundle(): EffectBundles.Entry | undefined;
    }
}
export default ActionResults;
