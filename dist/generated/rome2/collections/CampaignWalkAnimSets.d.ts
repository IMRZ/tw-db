import { CollectionCache, CollectionKey } from "../../../common";
import { AnimReferencePoses } from "./AnimReferencePoses";
export declare namespace CampaignWalkAnimSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _referencePose: string;
        readonly preStepTo: string;
        readonly stepTo: string;
        readonly postStepTo: string;
        readonly preStandToWalk: string;
        readonly standToWalk: string;
        readonly standToWalkDistance: number;
        readonly walk: string;
        readonly walkDistance: number;
        readonly walkToStand: string;
        readonly midWalkToStand: string;
        readonly walkToStandDistance: number;
        readonly postWalkToStand: string;
        readonly postMidWalkToStand: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly referencePose: AnimReferencePoses.Entry | undefined;
    }
}
export default CampaignWalkAnimSets;
