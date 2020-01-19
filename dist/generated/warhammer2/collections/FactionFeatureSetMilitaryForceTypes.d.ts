import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
export declare namespace FactionFeatureSetMilitaryForceTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultArmy: string;
        readonly _defaultNavy: string;
        readonly _seaLockedSpecialist: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultArmy(): MilitaryForceTypes.Entry | undefined;
        get defaultNavy(): MilitaryForceTypes.Entry | undefined;
        get seaLockedSpecialist(): MilitaryForceTypes.Entry | undefined;
    }
}
export default FactionFeatureSetMilitaryForceTypes;
