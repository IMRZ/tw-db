import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosStartingGeneralOptions } from "./StartPosStartingGeneralOptions";
import { MainUnits } from "./MainUnits";
export declare namespace StartPosStartingGeneralOptionAdditionalUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _general: number;
        readonly _unit: string;
        readonly percentSoldiers: number;
        constructor(collectionCache: CollectionCache, values: any);
        get general(): StartPosStartingGeneralOptions.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default StartPosStartingGeneralOptionAdditionalUnits;
