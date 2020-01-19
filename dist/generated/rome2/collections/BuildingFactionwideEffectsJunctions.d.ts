import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Effects } from "./Effects";
export declare namespace BuildingFactionwideEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _effect: string;
        readonly effectValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): BuildingLevels.Entry | undefined;
        get effect(): Effects.Entry | undefined;
    }
}
export default BuildingFactionwideEffectsJunctions;
