import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";
import { CaiRegionHintGroups } from "./CaiRegionHintGroups";
export declare namespace CaiRegionHintProfilesToRegionHintGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionHintProfileKey: string;
        readonly _regionHintGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionHintProfileKey: CaiRegionHintProfiles.Entry | undefined;
        readonly regionHintGroupKey: CaiRegionHintGroups.Entry | undefined;
    }
}
export default CaiRegionHintProfilesToRegionHintGroups;
