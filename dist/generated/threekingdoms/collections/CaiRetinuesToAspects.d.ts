import { CollectionCache, CollectionKey } from "../../../common";
import { Retinues } from "./Retinues";
import { CaiAspects } from "./CaiAspects";
export declare namespace CaiRetinuesToAspects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _retinue: string;
        readonly _aspect: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get retinue(): Retinues.Entry | undefined;
        get aspect(): CaiAspects.Entry | undefined;
    }
}
export default CaiRetinuesToAspects;
