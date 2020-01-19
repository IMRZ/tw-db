import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TraitInfo } from "./TraitInfo";
import { Factions } from "./Factions";
export declare namespace CursusHonorumTraitJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subcultureKey: string;
        readonly _traitInfoKey: string;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subcultureKey(): CulturesSubcultures.Entry | undefined;
        get traitInfoKey(): TraitInfo.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
    }
}
export default CursusHonorumTraitJunctions;
