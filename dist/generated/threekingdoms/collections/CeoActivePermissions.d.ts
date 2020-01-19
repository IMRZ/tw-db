import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { CeoPermissions } from "./CeoPermissions";
export declare namespace CeoActivePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceo: string;
        readonly _permissionsGrantedWhileActive: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceo(): Ceos.Entry | undefined;
        get permissionsGrantedWhileActive(): CeoPermissions.Entry | undefined;
    }
}
export default CeoActivePermissions;
