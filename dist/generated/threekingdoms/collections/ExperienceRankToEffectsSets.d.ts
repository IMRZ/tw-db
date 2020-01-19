import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ExperienceRankToEffectsSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly setName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ExperienceRankToEffectsSets;
