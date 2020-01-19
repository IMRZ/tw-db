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
        readonly researchPointsRequired: number;
        readonly costPerRound: number;
        readonly cooldownRoundsUntilNextResearch: number;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyNodeSet(): TechnologyNodeSets.Entry | undefined;
        get technologyKey(): Technologies.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default TechnologyNodes;
