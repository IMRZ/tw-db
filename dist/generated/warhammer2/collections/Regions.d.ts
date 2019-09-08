import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace Regions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly battleName: string;
        readonly inEncyclopedia: boolean;
        readonly _ownerBundle: string;
        readonly isSea: boolean;
        readonly factionSwappingId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ownerBundle: EffectBundles.Entry | undefined;
    }
}
export default Regions;
