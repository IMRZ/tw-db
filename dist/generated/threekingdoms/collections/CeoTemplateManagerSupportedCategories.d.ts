import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { CeoCategories } from "./CeoCategories";
export declare namespace CeoTemplateManagerSupportedCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateManagerKey: string;
        readonly _supportedCategory: string;
        readonly canSpawnCeos: boolean;
        readonly canOwnCeos: boolean;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get templateManagerKey(): CeoTemplateManagers.Entry | undefined;
        get supportedCategory(): CeoCategories.Entry | undefined;
    }
}
export default CeoTemplateManagerSupportedCategories;
