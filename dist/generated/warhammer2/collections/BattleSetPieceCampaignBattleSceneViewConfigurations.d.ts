import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceCampaignBattleScenes } from "./BattleSetPieceCampaignBattleScenes";
export declare namespace BattleSetPieceCampaignBattleSceneViewConfigurations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setPieceBattleScene: string;
        readonly separation: number;
        readonly cameraDistance: number;
        readonly cameraHeight: number;
        readonly scale: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly setPieceBattleScene: BattleSetPieceCampaignBattleScenes.Entry | undefined;
    }
}
export default BattleSetPieceCampaignBattleSceneViewConfigurations;
