import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { StartPosCharacters } from "./StartPosCharacters";
export declare namespace StartPosNavalUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _unitType: string;
        readonly _admiral: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitType: MainUnits.Entry | undefined;
        readonly admiral: StartPosCharacters.Entry | undefined;
    }
}
export default StartPosNavalUnits;
