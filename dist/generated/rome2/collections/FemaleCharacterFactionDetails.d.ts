import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { TraitInfo } from "./TraitInfo";
export declare namespace FemaleCharacterFactionDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly general: string;
        readonly publicOffice: string;
        readonly missions: string;
        readonly chanceToSpawn: number;
        readonly _trait: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get trait(): TraitInfo.Entry | undefined;
    }
}
export default FemaleCharacterFactionDetails;
