import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace MilitaryForceLegacyNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _subculture: string;
        readonly localisedName: string;
        readonly forArmy: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default MilitaryForceLegacyNames;
