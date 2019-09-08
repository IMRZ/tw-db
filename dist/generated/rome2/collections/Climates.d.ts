import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Climates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly climateType: string;
        readonly colourIndex: number;
        readonly coniferLine: number;
        readonly treeLine: number;
        readonly isLand: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Climates;
