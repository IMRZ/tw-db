import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { Ceos } from "./Ceos";
import { CeoNodes } from "./CeoNodes";
import { CeoCategories } from "./CeoCategories";
export declare namespace CeoTemplateManagerCeoLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateManager: string;
        readonly scopedLimitOrLocalOnlyLimit: boolean;
        readonly _ceoToLimit: string;
        readonly _ceoNodeToLimit: string;
        readonly _ceoCategoryToLimit: string;
        readonly maxLimitThatCanExistAtOnce: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get templateManager(): CeoTemplateManagers.Entry | undefined;
        get ceoToLimit(): Ceos.Entry | undefined;
        get ceoNodeToLimit(): CeoNodes.Entry | undefined;
        get ceoCategoryToLimit(): CeoCategories.Entry | undefined;
    }
}
export default CeoTemplateManagerCeoLimits;
