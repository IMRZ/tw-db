import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
export declare namespace TechnologyRequiredTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _requiredTechnology: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technology: Technologies.Entry | undefined;
        readonly requiredTechnology: Technologies.Entry | undefined;
    }
}
export default TechnologyRequiredTechnologyJunctions;
