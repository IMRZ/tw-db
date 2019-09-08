import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace TechnologyNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _technologyNodeSet: string;
        readonly _technologyKey: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly tier: number;
        readonly indent: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technologyNodeSet: TechnologyNodeSets.Entry | undefined;
        readonly technologyKey: Technologies.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
    }
}
export default TechnologyNodes;
