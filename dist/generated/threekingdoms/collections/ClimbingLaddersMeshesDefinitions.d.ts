import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Variants } from "./Variants";
export declare namespace ClimbingLaddersMeshesDefinitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _variantName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get variantName(): Variants.Entry | undefined;
    }
}
export default ClimbingLaddersMeshesDefinitions;
