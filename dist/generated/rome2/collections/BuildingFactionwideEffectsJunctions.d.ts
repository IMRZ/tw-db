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
        readonly building: BuildingLevels.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
    }
}
export default BuildingFactionwideEffectsJunctions;
