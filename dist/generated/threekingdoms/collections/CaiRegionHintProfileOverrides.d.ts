import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";
export declare namespace CaiRegionHintProfileOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionHintProfileKey: string;
        readonly _regionHintProfileParentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get regionHintProfileKey(): CaiRegionHintProfiles.Entry | undefined;
        get regionHintProfileParentKey(): CaiRegionHintProfiles.Entry | undefined;
    }
}
export default CaiRegionHintProfileOverrides;
