import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { UiColours } from "./UiColours";
export declare namespace PooledResourceUiColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pooledResource: string;
        readonly _primaryColour: string;
        readonly _increaseColour: string;
        readonly _decreaseColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pooledResource(): PooledResources.Entry | undefined;
        get primaryColour(): UiColours.Entry | undefined;
        get increaseColour(): UiColours.Entry | undefined;
        get decreaseColour(): UiColours.Entry | undefined;
    }
}
export default PooledResourceUiColours;
