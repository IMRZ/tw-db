import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace VoCampaignAgentTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly character: string;
        readonly key: string;
        readonly text: string;
        readonly _culture: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default VoCampaignAgentTexts;
