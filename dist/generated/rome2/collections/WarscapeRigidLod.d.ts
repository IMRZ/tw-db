import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
export declare namespace WarscapeRigidLod {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly filename: string;
        readonly range: string;
        readonly _rigid: string;
        constructor(collectionCache: CollectionCache, values: any);
        get rigid(): WarscapeRigid.Entry | undefined;
    }
}
export default WarscapeRigidLod;
