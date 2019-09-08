import { CollectionCache, CollectionKey } from "../../../common";
import { PreBattleSpeechTypesEnum } from "./PreBattleSpeechTypesEnum";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";
export declare namespace PreBattleSpeeches {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly text: string;
        readonly _type: number;
        readonly _parameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly type: PreBattleSpeechTypesEnum.Entry | undefined;
        readonly parameter: PreBattleSpeechParametersEnum.Entry | undefined;
    }
}
export default PreBattleSpeeches;
