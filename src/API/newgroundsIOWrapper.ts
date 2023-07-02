import { a as appID } from 'API/credentials';
import { e as encryptionKey } from 'API/credentials';

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

        NGIO.init(appID, encryptionKey, options);
	    NGIO.getConnectionStatus(function (status) {});
    }
  
    /**
     * Call in game loop.
     * 
     * Prints status to debug console.
     * @param text 
     * @returns 
     */
    public update()
    {
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
                    console.log("user needs to log in");
                    NGIO.openLoginPage();
  
                    break;
  
                // We are waiting for the user to log in (they should have a login page in a new browser tab)
                case NGIO.STATUS_WAITING_FOR_USER:
                    // It's possible the user may close the login page without signing in.
                    // Show a "Cancel Login" button that calls NGIO.cancelLogin();
                    console.log("Waiting for login...");
        
                    break;
  
                // user needs to log in
                case NGIO.STATUS_READY:
                    // Everything should be loaded.
        
                    // If NGIO.hasUser is false, the user opted not to sign in, so you may
                    // need to do some special handling in your game.
                    console.log("Status ready!");
        
                    break;
            }
        });
  
        NGIO.keepSessionAlive();
    }
}