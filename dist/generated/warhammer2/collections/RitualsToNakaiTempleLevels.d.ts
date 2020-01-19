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
        get key(): NakaiTempleLevels.Entry | undefined;
        get ritual(): Rituals.Entry | undefined;
    }
}
export default RitualsToNakaiTempleLevels;
