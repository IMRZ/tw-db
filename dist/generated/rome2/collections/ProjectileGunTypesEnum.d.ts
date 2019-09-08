import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectileGunTypesEnum {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly gunType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectileGunTypesEnum;
