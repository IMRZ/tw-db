import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace LabSettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly localisedTooltip: string;
        readonly minValue: number;
        readonly maxValue: number;
        readonly stepSize: number;
        readonly sortOrder: number;
        readonly displayAsPercentage: boolean;
        readonly defaultValue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default LabSettings;
