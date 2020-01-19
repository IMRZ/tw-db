import { CollectionCache, CollectionKey } from "../../../common";
import { CustomLoadingScreens } from "./CustomLoadingScreens";
export declare namespace CustomLoadingScreenComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _customLoadingScreenKey: string;
        readonly componentId: string;
        readonly imagePath: string;
        readonly localisedText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get customLoadingScreenKey(): CustomLoadingScreens.Entry | undefined;
    }
}
export default CustomLoadingScreenComponents;
