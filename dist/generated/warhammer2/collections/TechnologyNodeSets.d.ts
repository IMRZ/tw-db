import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { TechnologyCategories } from "./TechnologyCategories";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TexcExpansions } from "./TexcExpansions";
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
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
        readonly technologyCategory: TechnologyCategories.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default TechnologyNodeSets;
