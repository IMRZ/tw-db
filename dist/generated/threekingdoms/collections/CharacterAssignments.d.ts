import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentTargets } from "./CharacterAssignmentTargets";
import { CampaignPayloads } from "./CampaignPayloads";
import { ResourceTransactions } from "./ResourceTransactions";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
export declare namespace CharacterAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _targetType: string;
        readonly _initiationPayload: string;
        readonly _initiationCost: string;
        readonly _maintenanceCost: string;
        readonly duration: number;
        readonly recallDuration: number;
        readonly _constraints: string;
        constructor(collectionCache: CollectionCache, values: any);
        get targetType(): CharacterAssignmentTargets.Entry | undefined;
        get initiationPayload(): CampaignPayloads.Entry | undefined;
        get initiationCost(): ResourceTransactions.Entry | undefined;
        get maintenanceCost(): ResourceTransactions.Entry | undefined;
        get constraints(): CharacterAssignmentConstraintSets.Entry | undefined;
    }
}
export default CharacterAssignments;
