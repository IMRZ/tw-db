import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";
import { MainUnits } from "./MainUnits";
export declare namespace AgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly autoGenerate: boolean;
        readonly onscreenNameOverride: string;
        readonly isCaster: boolean;
        readonly smallIcon: string;
        readonly _voiceover: string;
        readonly _associatedUnitOverride: string;
        readonly descriptionTextOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get voiceover(): AudioVoActors.Entry | undefined;
        get associatedUnitOverride(): MainUnits.Entry | undefined;
    }
}
export default AgentSubtypes;
