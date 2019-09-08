import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";
export declare namespace CaiHintProfileGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _regionHintProfileKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionHintProfileKey: CaiRegionHintProfiles.Entry | undefined;
    }
}
export default CaiHintProfileGroups;
