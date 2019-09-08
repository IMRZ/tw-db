import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsOars } from "./ModelsOars";
export declare namespace ModelsNaval {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly logicFolder: string;
        readonly riggingFile: string;
        readonly destructionFile: string;
        readonly displayFolder: string;
        readonly _oarUpper: string;
        readonly _oarMiddle: string;
        readonly _oarLower: string;
        readonly selectionIndicatorShape: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly oarUpper: ModelsOars.Entry | undefined;
        readonly oarMiddle: ModelsOars.Entry | undefined;
        readonly oarLower: ModelsOars.Entry | undefined;
    }
}
export default ModelsNaval;
