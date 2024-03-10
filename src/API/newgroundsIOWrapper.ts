import { a as appID } from 'API/credentials';
import { e as encryptionKey } from 'API/credentials';
import { a_mp as appIDMP } from 'API/credentials';
import { e_mp as encryptionKeyMP } from 'API/credentials';

/**
 * Start & update functions to initialize NGIO.
 */
export class newgroundsIOWrapper
{  
    public start()
    {  
        console.log("NGIO booting...");
  
        let options =
        {
            // This should match the version number in your Newgrounds App Settings page
            version: "1.0.0",
    
            // If you aren't using any of these features, set them to false, or delete the line
            checkHostLicense: false,
            autoLogNewView: true,
            preloadMedals: true,
            preloadScoreBoards: true,
            preloadSaveSlots: true,
            debugMode: __DEV__
        };

        if (__MAP_PACK__)
        {
            NGIO.init(appIDMP, encryptionKeyMP, options);
        }
        else
        {
            NGIO.init(appID, encryptionKey, options);
        }
	    NGIO.getConnectionStatus(function (status) {});
    }

    public static status: 'STATUS_LOGIN_REQUIRED' | 'STATUS_WAITING_FOR_USER' | 'STATUS_READY' | 'isWaitingStatus' | undefined
  
    /**
     * Call in game loop.
     * 
     * Prints status to debug console.
     * @param text 
     * @returns 
     */
    public update(game: Phaser.Game)
    {
        let _this = this;

        // Note: the callback function only fires if there's a change in status
        NGIO.getConnectionStatus(function (status)
        {
            // You could hide any login/preload UI elements here (we'll show what we need later).
  
            // This is a generic check to see if we're waiting for something...
            if (NGIO.isWaitingStatus)
            {
                // We're either waiting for the server to respond, or the user to sign in on Newgrounds.
                // Show a "please wait" message and/or a spinner so the player knows something is happening
                // text.setText("please wait");
                console.log("please wait");
            }
  
            // check the actual connection status
            switch (status)
            {
                // we have version and license info
                case NGIO.STATUS_LOCAL_VERSION_CHECKED:
                    if (NGIO.isDeprecated)
                    {
                        // this copy of the game is out of date
                        // (or you forgot to update the version number in your init() call)
            
                        // Show a 'new version available' button that calls
                        // NGIO.loadOfficialUrl();
                        console.log("New version available");
                        break;
                    }
    
                    if (!NGIO.legalHost)
                    {
                        // the site hosting this copy has been blocked
            
                        // show the player a message ("This site is illegally hosting this game") , and add a button that calls
                        // NGIO.loadOfficialUrl();
                        console.log("illegal host");
                    }
    
                    break;
  
                // user needs to log in
                case NGIO.STATUS_LOGIN_REQUIRED:
                    // present the user with a message ("This game uses features that require a Newgrounds account")
                    // along with 2 buttons:
        
                    // A "Log In" button that calls NGIO.openLoginPage();
                    // A "No Thanks: button that calls NGIO.skipLogin();.,
                    game.events.emit(`STATUS_LOGIN_REQUIRED`);
                    console.log("user needs to log in");
                    newgroundsIOWrapper.status = 'STATUS_LOGIN_REQUIRED';
                    // return `STATUS_LOGIN_REQUIRED`;
                    // NGIO.openLoginPage();
    
  
                    break;
  
                // We are waiting for the user to log in (they should have a login page in a new browser tab)
                case NGIO.STATUS_WAITING_FOR_USER:
                    // It's possible the user may close the login page without signing in.
                    // Show a "Cancel Login" button that calls NGIO.cancelLogin();
                    game.events.emit(`STATUS_WAITING_FOR_USER`);
                    console.log("Waiting for login...");
                    newgroundsIOWrapper.status = 'STATUS_WAITING_FOR_USER';
                    // return `STATUS_WAITING_FOR_USER`;
                    break;
  
                // user needs to log in
                case NGIO.STATUS_READY:
                    // Everything should be loaded.
        
                    // If NGIO.hasUser is false, the user opted not to sign in, so you may
                    // need to do some special handling in your game.
                    game.events.emit(`STATUS_READY`);
                    console.log("Status ready!");
                    newgroundsIOWrapper.status = 'STATUS_READY';
                    // return `STATUS_READY`;

                    // EXTERNAL SAVE DATA LOAD

                    NGIO.ngioCore.executeComponent(_this.component, _this.onExternalSaveSlotsLoaded);


                    break;
                
            }
        });
  
        NGIO.keepSessionAlive();
    }
    
    // we'll fill this in when we execute our component
    private externalSaveSlots:any = [0, 0, 0];

    // function to get slots by slot numer
    getExternalSaveSlot(app_id: string, slot_id: number)
    {
        if (typeof(this.externalSaveSlots[app_id]) === 'undefined') return null;

        for(var i=0; i<this.externalSaveSlots.length; i++) {
            if (this.externalSaveSlots[i].id === slot_id) return this.externalSaveSlots[i];
        }
        return null;
    }

    // function to load save data from a slot
    public loadExternalSaveData(app_id: string, slot_id: number, callback: (data: any, app_id: string, slot: number | null) => void)
    {
        // slot is a NewgroundsIO.objects.SaveSlot instance
        var slot = this.getExternalSaveSlot(app_id, slot_id);

        // if the slots aren't loaded yet, or the slot has no save data, pass null to the callback
        if (!slot || !slot.hasData) {
            callback(null, app_id, null);

        // load the slot data and pass it to the callback
        } else {
            slot.getData(function(data: any) {
                callback(data, app_id, slot);
            });

        }
    }

    // create the component, and pass in an external App ID
    private component = new NewgroundsIO.components.CloudSave.loadSlots({
        app_id: (__MAP_PACK__ ? '55003:7XXBXFge' : '57584:YRUg4prp'), // in "12345:UvWXyZ" format
    });

    // execute the component on the server

    // serverResponse will be a NewgroundsIO.objects.Response instance
    onExternalSaveSlotsLoaded(serverResponse: any)
    {
        if (serverResponse.success) {

            // result will be an instance of NewgroundsIO.results.CloudSave.loadSlots
            var result = serverResponse.result;

            if (result.success) {

                // store the save slot
                // this.externalSaveSlots = new Array([0, 0, 0]);
                // this.externalSaveSlots[result.app_id] = result.slots;

                // console.debug(result.slots[1].data);

                // You can get the app id that was used with result.app_id

            } else {
                // the component failed
                console.error(result.error.message);
            }

        } else {

            // something went wrong
            console.error(serverResponse.error.message);
        }
    }


    // ... when you are ready to load an external slot ...


    // loadExternalSaveData(SOME_OTHER_APP_ID, SLOT_NUMBER, onSaveDataLoaded);

    onSaveDataLoaded(data: any, app_id: string, slot: number)
    {
        // data is the loaded data, app_id is the app id you used
        // and slot is a NewgroundsIO.objects.SaveSlot instance

        console.debug(data, app_id, slot);

        // do your thing!
    }

}