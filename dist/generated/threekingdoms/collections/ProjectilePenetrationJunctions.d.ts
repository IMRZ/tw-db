import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";
export declare namespace ProjectilePenetrationJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _entitySizeCap: string;
        readonly maxPenetration: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
        get entitySizeCap(): BattleEntitiesSizeEnums.Entry | undefined;
    }
}
export default ProjectilePenetrationJunctions;
