import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesReligionChangeManagementPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly proportionOverMeanStateReligionValueForReligionChangeTick: number;
        readonly religionChangeTicksRequiredToChange: number;
        readonly percentProbabilityOfReligionChangeOnceThresholdReached: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesReligionChangeManagementPolicies;
