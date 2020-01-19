import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { ContextualDiplomacyEventSets } from "./ContextualDiplomacyEventSets";
export declare namespace ActionResults {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _actorEffectBundle: string;
        readonly _targetEffectBundle: string;
        readonly actorEffectBundleTurns: number;
        readonly targetEffectBundleTurns: number;
        readonly _actingFactionEffectBundle: string;
        readonly actingFactionEffectBundleTurns: number;
        readonly _diplomaticEventSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get actorEffectBundle(): EffectBundles.Entry | undefined;
        get targetEffectBundle(): EffectBundles.Entry | undefined;
        get actingFactionEffectBundle(): EffectBundles.Entry | undefined;
        get diplomaticEventSet(): ContextualDiplomacyEventSets.Entry | undefined;
    }
}
export default ActionResults;
