import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { CeoSets } from "./CeoSets";
export declare namespace CdirEventsDilemmaChoiceDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly localisedChoiceLabel: string;
        readonly localisedChoiceTitle: string;
        readonly displayDilemmaChoiceIfCeoActive: boolean;
        readonly _requiredCeos: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined;
        get requiredCeos(): CeoSets.Entry | undefined;
    }
}
export default CdirEventsDilemmaChoiceDetails;
