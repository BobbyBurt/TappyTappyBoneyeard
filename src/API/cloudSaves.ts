/**
 * 
 */
export default class cloudSaves {
  
    /**
     * Registry dataManager keys which cloud saves will read & write.
     */
    private static cloudDataKeys: Array<string>;

    /**
     * 
     */
    private static saveSlot: number = 2;

    /**
     * or local. Set true upon NG.io log in.
     */
    public static cloud = false;

    /**
     * Set the registry dataManager keys which cloud saves will read & write. This should be called before save or load.
     * @param dataKeys Registry dataManager keys which cloud saves will read & write.
     */
    static setDataKeys(dataKeys: Array<string>)
    {
        this.cloudDataKeys = dataKeys;
    }

    /**
     * Sets all cloudDataKeys to null.
     * @param scene 
     */
    public static clearData(scene: Phaser.Scene)
    {
        this.cloudDataKeys.forEach((key: string, index: number) =>
        {
            scene.registry.set(key, undefined);
        });
    }
    
    public static loadData(scene: Phaser.Scene): boolean
    {
        if (cloudSaves.cloud)
        {
            console.log('Loading NGIO cloud save data...')
            console.debug(NGIO.getSaveSlot(this.saveSlot));
    
            if (NGIO.getSaveSlot(this.saveSlot).size > 0)
            // this doesn't return undefined in the case of a nonexistant save. This works instead.
            {
                NGIO.getSaveSlotData(this.saveSlot, (stringData) =>
                {
                    this.onDataGetComplete(stringData, scene)
                });
                return true;
            }
            else
            {
                console.log('no cloud data exists yet.');
                return false;
            }
        }
        else
        {            
            let localSaveData = localStorage.getItem('save-data');
            if (localSaveData)
            {
                this.onDataGetComplete(localSaveData, scene);
                console.debug('loaded local save data');
                return true;
            }
            else
            {
                console.log('no local save data exists yet.');
                return false;
            }
        }
        
    }

    private static onDataGetComplete(stringData: string, scene: Phaser.Scene)
    {
        console.debug(stringData);
        let jsonData:Array<Array<any>> = [[]];
        try
        {
            jsonData = JSON.parse(stringData);
        } 
        catch (error) 
        {
            console.warn('save slot data does not exist.')
        }
          
        console.debug(jsonData);
        if (jsonData == null)
        {
            
        }
        jsonData.forEach((value, index) => 
        {
            scene.registry.set(jsonData[index][0], jsonData[index][1]);
        });
        if (__DEV__)
        {
            console.debug(scene.registry.list);
        }
        scene.game.events.emit('NGIO-cloud-load-complete');
        console.log('save data loading complete.');
    }

    public static saveData(scene: Phaser.Scene)
    {
        console.log('Saving NGIO cloud save data...')
        
        const registryDataArray = scene.registry.get(this.cloudDataKeys);
        let dataToSave = new Map<string, any>();
        this.cloudDataKeys.forEach((key: string, index: number) =>
        {
            dataToSave.set(key, registryDataArray[index]);
        });
        
        const dataToSaveString = 
        JSON.stringify(Array.from(dataToSave.entries()));
        // JSON.stringify doesn't work for Maps. This solution is the second answer from https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map. It's not the best solution, but I believe it works for my purposes.
        
        if (__DEV__)
        {
            console.debug(`data to save: ${dataToSaveString}`);
        }
        
        if (cloudSaves.cloud)
        {
            NGIO.setSaveSlotData(this.saveSlot, dataToSaveString, (slot:any) =>
            {
                scene.game.events.emit('NGIO-cloud-save-complete');
                console.log('NGIO cloud data saved.');
            });
        }
        else
        {
            // local
            localStorage.setItem('save-data', dataToSaveString);
            console.log('local save data saved.');
        }
        
    }
}