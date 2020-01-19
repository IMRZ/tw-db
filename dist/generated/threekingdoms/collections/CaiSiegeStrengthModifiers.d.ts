import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CaiSiegeStrengthModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly defenceStrengthModifier: number;
        readonly assaultStrengthModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CaiSiegeStrengthModifiers;
