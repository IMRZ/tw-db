import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { MissionGroups } from "./MissionGroups";
import { EffectBundles } from "./EffectBundles";
export declare namespace AgentSubtypesToMissionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _missionGroup: string;
        readonly videoPath: string;
        readonly _effectBundle: string;
        readonly _battleEffect: string;
        readonly imagePath: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agent: AgentSubtypes.Entry | undefined;
        readonly missionGroup: MissionGroups.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly battleEffect: EffectBundles.Entry | undefined;
    }
}
export default AgentSubtypesToMissionGroups;
