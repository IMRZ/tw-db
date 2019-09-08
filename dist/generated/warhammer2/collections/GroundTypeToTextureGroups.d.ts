import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
export declare namespace GroundTypeToTextureGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly textureGroup: string;
        readonly _groundType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groundType: GroundTypes.Entry | undefined;
    }
}
export default GroundTypeToTextureGroups;
