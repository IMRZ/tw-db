import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
export declare namespace TechnologyDisablesTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _disabledTechnology: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technology(): Technologies.Entry | undefined;
        get disabledTechnology(): Technologies.Entry | undefined;
    }
}
export default TechnologyDisablesTechnologyJunctions;
