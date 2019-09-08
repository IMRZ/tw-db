import { CollectionCache, CollectionKey } from "../../../common";
import { VoScripts } from "./VoScripts";
import { TExcLocalisableFields } from "./TExcLocalisableFields";
export declare namespace VoTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly recordedFilename: string;
        readonly _scriptId: number;
        readonly order: number;
        readonly comment: string;
        readonly _tableField: number;
        readonly foreignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly scriptId: VoScripts.Entry | undefined;
        readonly tableField: TExcLocalisableFields.Entry | undefined;
    }
}
export default VoTexts;
