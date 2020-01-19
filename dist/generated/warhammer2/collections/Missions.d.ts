import { CollectionCache, CollectionKey } from "../../../common";
import { MissionTypes } from "./MissionTypes";
import { CdirEventsCategories } from "./CdirEventsCategories";
import { BattleSetPieces } from "./BattleSetPieces";
export declare namespace Missions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _missionType: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiImage: string;
        readonly uiIcon: string;
        readonly generate: boolean;
        readonly prioritised: boolean;
        readonly _eventCategory: string;
        readonly _setPieceBattle: string;
        readonly locationX: number;
        readonly locationY: number;
        readonly questMission: boolean;
        readonly triggerRadius: number;
        readonly questCharacter: string;
        readonly questMissionFinal: boolean;
        readonly stickyByDefault: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get missionType(): MissionTypes.Entry | undefined;
        get eventCategory(): CdirEventsCategories.Entry | undefined;
        get setPieceBattle(): BattleSetPieces.Entry | undefined;
    }
}
export default Missions;
