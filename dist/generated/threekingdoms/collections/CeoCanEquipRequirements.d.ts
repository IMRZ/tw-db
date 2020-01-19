import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
export declare namespace CeoCanEquipRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _equipCeo: string;
        readonly checkingIsCeoActiveOrIsCeoEquipped: boolean;
        readonly _requiredCeo1: string;
        readonly _requiredCeo2: string;
        readonly _requiredCeo3: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get equipCeo(): Ceos.Entry | undefined;
        get requiredCeo1(): Ceos.Entry | undefined;
        get requiredCeo2(): Ceos.Entry | undefined;
        get requiredCeo3(): Ceos.Entry | undefined;
    }
}
export default CeoCanEquipRequirements;
