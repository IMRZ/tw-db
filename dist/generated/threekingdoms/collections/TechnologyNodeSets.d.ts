import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { TechnologyCategories } from "./TechnologyCategories";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace TechnologyNodeSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly _technologyCategory: string;
        readonly _culture: string;
        readonly _subculture: string;
        readonly localisedName: string;
        readonly tooltipString: string;
        readonly encyclopaediaString: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get technologyCategory(): TechnologyCategories.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default TechnologyNodeSets;
