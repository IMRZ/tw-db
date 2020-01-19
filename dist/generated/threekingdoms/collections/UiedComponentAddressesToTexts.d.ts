import { CollectionCache, CollectionKey } from "../../../common";
import { UiedComponentTexts } from "./UiedComponentTexts";
import { UiedTextLayouts } from "./UiedTextLayouts";
export declare namespace UiedComponentAddressesToTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentLabel: string;
        readonly componentAddress: string;
        readonly _componentLayout: string;
        constructor(collectionCache: CollectionCache, values: any);
        get componentLabel(): UiedComponentTexts.Entry | undefined;
        get componentLayout(): UiedTextLayouts.Entry | undefined;
    }
}
export default UiedComponentAddressesToTexts;
