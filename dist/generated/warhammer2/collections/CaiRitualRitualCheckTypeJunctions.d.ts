import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { CaiRitualCheckTypes } from "./CaiRitualCheckTypes";
export declare namespace CaiRitualRitualCheckTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly _ritualCheckType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ritual(): Rituals.Entry | undefined;
        get ritualCheckType(): CaiRitualCheckTypes.Entry | undefined;
    }
}
export default CaiRitualRitualCheckTypeJunctions;
