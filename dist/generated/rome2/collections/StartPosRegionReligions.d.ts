import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { Religions } from "./Religions";
export declare namespace StartPosRegionReligions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: number;
        readonly _religion: string;
        readonly percentage: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: StartPosRegions.Entry | undefined;
        readonly religion: Religions.Entry | undefined;
    }
}
export default StartPosRegionReligions;
