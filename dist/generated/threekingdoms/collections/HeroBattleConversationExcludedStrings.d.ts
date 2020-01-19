import { CollectionCache, CollectionKey } from "../../../common";
import { HeroBattleConversationStrings } from "./HeroBattleConversationStrings";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace HeroBattleConversationExcludedStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _heroBattleConversationString: string;
        readonly _voActor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get heroBattleConversationString(): HeroBattleConversationStrings.Entry | undefined;
        get voActor(): AudioVoActors.Entry | undefined;
    }
}
export default HeroBattleConversationExcludedStrings;
