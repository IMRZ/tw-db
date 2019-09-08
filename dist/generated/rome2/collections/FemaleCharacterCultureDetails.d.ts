import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { TraitInfo } from "./TraitInfo";
export declare namespace FemaleCharacterCultureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly general: string;
        readonly publicOffice: string;
        readonly missions: string;
        readonly chanceToSpawn: number;
        readonly _trait: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly trait: TraitInfo.Entry | undefined;
    }
}
export default FemaleCharacterCultureDetails;
