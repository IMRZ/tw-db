import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { AudioVoActorGroups } from "./AudioVoActorGroups";
export declare namespace AgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly autoGenerate: boolean;
        readonly onscreenNameOverride: string;
        readonly isCaster: boolean;
        readonly smallIcon: string;
        readonly _associatedUnitOverride: string;
        readonly descriptionTextOverride: string;
        readonly _audioVoiceoverActorGroup: string;
        readonly showInUi: boolean;
        readonly cap: number;
        readonly hasFemaleName: boolean;
        readonly canGainXp: boolean;
        readonly loyaltyIsApplicable: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly associatedUnitOverride: MainUnits.Entry | undefined;
        readonly audioVoiceoverActorGroup: AudioVoActorGroups.Entry | undefined;
    }
}
export default AgentSubtypes;
