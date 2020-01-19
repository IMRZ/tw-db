import { CollectionCache, CollectionKey } from "../../../common";
import { UiEffectValueTypeEnums } from "./UiEffectValueTypeEnums";
export declare namespace UiResourceTransactionPooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _iconSupplementColourType: string;
        readonly iconPath: string;
        readonly order: number;
        readonly hideInUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get iconSupplementColourType(): UiEffectValueTypeEnums.Entry | undefined;
    }
}
export default UiResourceTransactionPooledResourceJunctions;
