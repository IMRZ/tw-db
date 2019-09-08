import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { EncyclopediaPatchTexts } from "./EncyclopediaPatchTexts";
export declare namespace EncyclopediaUnitPatchTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _patchText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly patchText: EncyclopediaPatchTexts.Entry | undefined;
    }
}
export default EncyclopediaUnitPatchTexts;
