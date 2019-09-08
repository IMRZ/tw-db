import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { BattleTerrainFarms } from "./BattleTerrainFarms";
export declare namespace CulturesSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly subculture: string;
        readonly _culture: string;
        readonly index: number;
        readonly _farm: string;
        readonly name: string;
        readonly confederationScreenName: string;
        readonly confederationSummaryName: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly farm: BattleTerrainFarms.Entry | undefined;
    }
}
export default CulturesSubcultures;
