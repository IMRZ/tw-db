import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitySurrenderComponents } from "./CaiPersonalitySurrenderComponents";
import { CaiPersonalitySurrenderComponentContexts } from "./CaiPersonalitySurrenderComponentContexts";
export declare namespace CaiPersonalitySurrenderComponentValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentKey: string;
        readonly _contextKey: string;
        readonly ratioMin: number;
        readonly ratioMax: number;
        readonly ratioCharacterMin: number;
        readonly ratioCharacterMax: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentKey(): CaiPersonalitySurrenderComponents.Entry | undefined;
        get contextKey(): CaiPersonalitySurrenderComponentContexts.Entry | undefined;
    }
}
export default CaiPersonalitySurrenderComponentValues;
