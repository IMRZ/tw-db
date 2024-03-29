import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CdirMilitaryGeneratorTemplates } from "./CdirMilitaryGeneratorTemplates";
export declare namespace CdirMilitaryGeneratorTemplatePriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _configKey: string;
        readonly _templateKey: string;
        readonly priority: number;
        readonly leaderOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined;
        get templateKey(): CdirMilitaryGeneratorTemplates.Entry | undefined;
    }
}
export default CdirMilitaryGeneratorTemplatePriorities;
