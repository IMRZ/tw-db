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
        readonly _traitInfoKeyFemale: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly subcultureKey: CulturesSubcultures.Entry | undefined;
        readonly traitInfoKey: TraitInfo.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
        readonly traitInfoKeyFemale: TraitInfo.Entry | undefined;
    }
}
export default CursusHonorumTraitJunctions;
