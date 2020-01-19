import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
export declare namespace TechnologyRequiredProgressionLevelJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly progressionLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get technology(): Technologies.Entry | undefined;
    }
}
export default TechnologyRequiredProgressionLevelJunctions;
