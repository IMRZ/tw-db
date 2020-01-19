import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
export declare namespace TechnologyRequiredTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _requiredTechnology: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technology(): Technologies.Entry | undefined;
        get requiredTechnology(): Technologies.Entry | undefined;
    }
}
export default TechnologyRequiredTechnologyJunctions;
