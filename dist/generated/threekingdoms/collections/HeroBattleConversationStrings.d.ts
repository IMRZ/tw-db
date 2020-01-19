import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace HeroBattleConversationStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly string: string;
        readonly _gameExpansionKey: string;
        readonly isFemale: boolean;
        readonly weighting: number;
        readonly gameModeRecords: boolean;
        readonly gameModeRomance: boolean;
        readonly mandarin: boolean;
        readonly french: boolean;
        readonly german: boolean;
        readonly italian: boolean;
        readonly spanish: boolean;
        readonly russian: boolean;
        readonly korean: boolean;
        readonly polish: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default HeroBattleConversationStrings;
