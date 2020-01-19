import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { CeoGroups } from "./CeoGroups";
export declare namespace CeoTemplateManagerAllPossibleCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateManager: string;
        readonly _includeCeoGroup: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get templateManager(): CeoTemplateManagers.Entry | undefined;
        get includeCeoGroup(): CeoGroups.Entry | undefined;
    }
}
export default CeoTemplateManagerAllPossibleCeos;
