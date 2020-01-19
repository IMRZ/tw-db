import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace UnitExperienceThresholdModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly modifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): MainUnits.Entry | undefined;
    }
}
export default UnitExperienceThresholdModifiers;
