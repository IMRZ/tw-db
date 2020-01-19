import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { BattleSetPieces } from "./BattleSetPieces";
export declare namespace LoadingScreenQuotesToQuestBattles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _quote: string;
        readonly _questBattle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get quote(): LoadingScreenQuotes.Entry | undefined;
        get questBattle(): BattleSetPieces.Entry | undefined;
    }
}
export default LoadingScreenQuotesToQuestBattles;
