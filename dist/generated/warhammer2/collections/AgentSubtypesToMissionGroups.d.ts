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
        get agent(): AgentSubtypes.Entry | undefined;
        get missionGroup(): MissionGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get battleEffect(): EffectBundles.Entry | undefined;
    }
}
export default AgentSubtypesToMissionGroups;
