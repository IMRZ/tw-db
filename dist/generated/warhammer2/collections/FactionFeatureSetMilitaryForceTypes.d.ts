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
        readonly defaultArmy: MilitaryForceTypes.Entry | undefined;
        readonly defaultNavy: MilitaryForceTypes.Entry | undefined;
        readonly seaLockedSpecialist: MilitaryForceTypes.Entry | undefined;
    }
}
export default FactionFeatureSetMilitaryForceTypes;
