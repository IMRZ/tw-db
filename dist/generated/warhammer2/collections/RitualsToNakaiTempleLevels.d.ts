import { CollectionCache, CollectionKey } from "../../../common";
import { NakaiTempleLevels } from "./NakaiTempleLevels";
import { Rituals } from "./Rituals";
export declare namespace RitualsToNakaiTempleLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _ritual: string;
        readonly sort: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: NakaiTempleLevels.Entry | undefined;
        readonly ritual: Rituals.Entry | undefined;
    }
}
export default RitualsToNakaiTempleLevels;
