import { CollectionCache, CollectionKey } from "../../../common";
import { HonourFactors } from "./HonourFactors";
export declare namespace HonourEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _factor: string;
        readonly value: number;
        readonly appliesToAi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get factor(): HonourFactors.Entry | undefined;
    }
}
export default HonourEffects;
