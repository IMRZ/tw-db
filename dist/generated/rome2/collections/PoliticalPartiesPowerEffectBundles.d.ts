import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";
import { EffectBundles } from "./EffectBundles";
export declare namespace PoliticalPartiesPowerEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _politicalPartyKey: string;
        readonly _effectBundle: string;
        readonly powerLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly politicalPartyKey: PoliticalParties.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default PoliticalPartiesPowerEffectBundles;
