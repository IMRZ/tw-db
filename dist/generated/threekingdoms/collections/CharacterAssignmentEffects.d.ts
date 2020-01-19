import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignments } from "./CharacterAssignments";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CharacterAssignmentEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _assignment: string;
        readonly _effect: string;
        readonly _scope: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get assignment(): CharacterAssignments.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get scope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CharacterAssignmentEffects;
