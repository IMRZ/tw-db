import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { TechnologyUiGroups } from "./TechnologyUiGroups";
import { ResourceCosts } from "./ResourceCosts";
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
        readonly researchPointsRequired: number;
        readonly costPerRound: number;
        readonly _optionalUiGroup: string;
        readonly foodCost: number;
        readonly _resourceCost: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyNodeSet(): TechnologyNodeSets.Entry | undefined;
        get technologyKey(): Technologies.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get optionalUiGroup(): TechnologyUiGroups.Entry | undefined;
        get resourceCost(): ResourceCosts.Entry | undefined;
    }
}
export default TechnologyNodes;
