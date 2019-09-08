import { CollectionCache, CollectionKey } from "../../../common";
import { UiComponentLocalisation } from "./UiComponentLocalisation";
export declare namespace UiComponentAddressesWithLocalisation {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentLabel: string;
        readonly componentAddress: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly componentLabel: UiComponentLocalisation.Entry | undefined;
    }
}
export default UiComponentAddressesWithLocalisation;
