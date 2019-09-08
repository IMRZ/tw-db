import { CollectionCache, CollectionKey } from "../../../common";
import { TExcLocalisableFields } from "./TExcLocalisableFields";
import { Languages } from "./Languages";
import { VoScripts } from "./VoScripts";
export declare namespace SubtitleTimings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subtitleField: number;
        readonly _language: string;
        readonly start: number;
        readonly end: number;
        readonly _scriptId: number;
        readonly textSection: number;
        readonly foreignKey: string;
        readonly textId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly subtitleField: TExcLocalisableFields.Entry | undefined;
        readonly language: Languages.Entry | undefined;
        readonly scriptId: VoScripts.Entry | undefined;
    }
}
export default SubtitleTimings;
