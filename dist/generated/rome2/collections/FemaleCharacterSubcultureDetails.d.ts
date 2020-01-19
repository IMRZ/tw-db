import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TraitInfo } from "./TraitInfo";
export declare namespace FemaleCharacterSubcultureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly general: string;
        readonly publicOffice: string;
        readonly missions: string;
        readonly chanceToSpawn: number;
        readonly _trait: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
        get trait(): TraitInfo.Entry | undefined;
    }
}
export default FemaleCharacterSubcultureDetails;
