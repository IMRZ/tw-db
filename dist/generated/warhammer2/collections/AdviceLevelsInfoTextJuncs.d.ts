import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceLevels } from "./AdviceLevels";
import { AdviceInfoTexts } from "./AdviceInfoTexts";
export declare namespace AdviceLevelsInfoTextJuncs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _adviceLevel: number;
        readonly _adviceInfoText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly adviceLevel: AdviceLevels.Entry | undefined;
        readonly adviceInfoText: AdviceInfoTexts.Entry | undefined;
    }
}
export default AdviceLevelsInfoTextJuncs;
