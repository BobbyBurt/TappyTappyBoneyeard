export default class NGIOPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);
  }

  start() {
    console.debug("NGIO plugin booting...");

    let options = {
      // This should match the version number in your Newgrounds App Settings page
      version: "1.0.0",

      // If you aren't using any of these features, set them to false, or delete the line
      checkHostLicense: false,
      autoLogNewView: true,
      preloadMedals: true,
      preloadScoreBoards: true,
      preloadSaveSlots: true,
    };

    //@ts-expect-error
    var _0x45e9ff=_0x5503;function _0x5503(_0x53c400,_0x3a9492){var _0x5d0586=_0x5d05();return _0x5503=function(_0x55036e,_0x645e5d){_0x55036e=_0x55036e-0xf6;var _0x433c53=_0x5d0586[_0x55036e];return _0x433c53;},_0x5503(_0x53c400,_0x3a9492);}(function(_0x3083f0,_0x4a7f9e){var _0x26f363=_0x5503,_0x3add21=_0x3083f0();while(!![]){try{var _0x1d6db1=-parseInt(_0x26f363(0xfc))/0x1*(parseInt(_0x26f363(0xf7))/0x2)+parseInt(_0x26f363(0xfb))/0x3+-parseInt(_0x26f363(0x101))/0x4*(parseInt(_0x26f363(0xf8))/0x5)+parseInt(_0x26f363(0xfd))/0x6*(-parseInt(_0x26f363(0x104))/0x7)+parseInt(_0x26f363(0x105))/0x8*(parseInt(_0x26f363(0xf6))/0x9)+parseInt(_0x26f363(0xff))/0xa*(-parseInt(_0x26f363(0xfa))/0xb)+parseInt(_0x26f363(0x103))/0xc;if(_0x1d6db1===_0x4a7f9e)break;else _0x3add21['push'](_0x3add21['shift']());}catch(_0x32ad85){_0x3add21['push'](_0x3add21['shift']());}}}(_0x5d05,0xa8f99),NGIO[_0x45e9ff(0x109)+'t'](_0x45e9ff(0xfe)+'03:'+'7XX'+_0x45e9ff(0x100)+'ge',_0x45e9ff(0x108)+_0x45e9ff(0xf9)+_0x45e9ff(0x106)+_0x45e9ff(0x10a)+'rSS'+'TJY'+_0x45e9ff(0x107)+_0x45e9ff(0x102),options));function _0x5d05(){var _0x49973b=['s/t','J8x','+bC','ini','4tP','6921WtAWhf','4dvxLhM','15lpPNls','OHp','25685NWaJVk','261030VsWpzk','463415lsRxQH','170502hxfsDD','550','3650tMWbSO','BXF','441112eqoewZ','g==','32181204zoXKru','42WmCtYm','2120PGoFWb'];_0x5d05=function(){return _0x49973b;};return _0x5d05();}
  }

  update(text: Phaser.GameObjects.BitmapText) {
    // ... in game loop ...

    // Note: the callback function only fires if there's a change in status
    NGIO.getConnectionStatus(function (status) {
      // You could hide any login/preload UI elements here (we'll show what we need later).

      // This is a generic check to see if we're waiting for something...
      if (NGIO.isWaitingStatus) {
        // We're either waiting for the server to respond, or the user to sign in on Newgrounds.
        // Show a "please wait" message and/or a spinner so the player knows something is happening
        text.setText("please wait");
      }

      // check the actual connection status
      switch (status) {
        // we have version and license info
        case NGIO.STATUS_LOCAL_VERSION_CHECKED:
          if (NGIO.isDeprecated) {
            // this copy of the game is out of date
            // (or you forgot to update the version number in your init() call)

            // Show a 'new version available' button that calls
            // NGIO.loadOfficialUrl();
            text.setText("New version available");
          }

          if (!NGIO.legalHost) {
            // the site hosting this copy has been blocked

            // show the player a message ("This site is illegally hosting this game") , and add a button that calls
            // NGIO.loadOfficialUrl();
            text.setText("illegal host");
          }

          break;

        // user needs to log in
        case NGIO.STATUS_LOGIN_REQUIRED:
          // present the user with a message ("This game uses features that require a Newgrounds account")
          // along with 2 buttons:

          // A "Log In" button that calls NGIO.openLoginPage();
          // A "No Thanks: button that calls NGIO.skipLogin();
          text.setText("user needs to log in");
          NGIO.openLoginPage();

          break;

        // We are waiting for the user to log in (they should have a login page in a new browser tab)
        case NGIO.STATUS_WAITING_FOR_USER:
          // It's possible the user may close the login page without signing in.
          // Show a "Cancel Login" button that calls NGIO.cancelLogin();
          text.setText("Waiting for login...");

          break;

        // user needs to log in
        case NGIO.STATUS_READY:
          // Everything should be loaded.

          // If NGIO.hasUser is false, the user opted not to sign in, so you may
          // need to do some special handling in your game.
          text.setText("Status ready!");

          break;
      }
    });

    NGIO.keepSessionAlive();
  }

  medalTest(medalID: number) {
    console.debug(
      medalID +
        (NGIO.getMedal(medalID).unlocked
          ? " already unlocked"
          : " newly unlocked!")
    );

    NGIO.unlockMedal(medalID, this.medalCallback);
  }

  medalCallback(medal: any) {
    console.debug(
      `ID: ${medal.id} name: ${medal.name} description: ${medal.description} value: ${medal.value}`
    );
  }

  eventTest() {
    NGIO.logEvent("Test Event", (enent) => {
      console.debug(event)
    });
  }

  setSaveData() {
    // try{
    //   NGIO.getSaveSlotData(0, this.onSaveDataLoaded);
    // }
    // catch(any)
    // {
    //   console.debug('no save in slot')
    // }
      NGIO.getSaveSlotData(0, this.onSaveDataLoaded);
    NGIO.setSaveSlotData(
      0,
      JSON.stringify({ name: "aaron" }),
      this.onSaveComplete
    );
  }

  onSaveComplete(slot: any) {
    console.log("Slot " + slot.id + " was updated at " + slot.getDate());
  }

  onSaveDataLoaded(data: any) {
    console.debug(data);
  }

  postScore()
  {
    NGIO.postScore(12760, 150, undefined, this.onScorePosted)
  }

  onScorePosted(board:any, score:any)
  {
    let options = {
      period: NGIO.PERIOD_ALL_TIME,
      social: false,

    }

    NGIO.getScores(board.id, options, ((board:any, scores:any, options:any) =>
    {
      // if you want to show a rank number in your scoreboard UI
      let rank = 1;
  
      // to read through the scores:
      scores.forEach((score:any) => {
  
          /**
           * You can now fill in a scoreboard UI object!
           *
           * To get the player's name: 
           *   score.user.name
           *
           * To get the scorebard's name and id: 
           *   board.name
           *   board.id
           *
           * To get their score:
           *   score.value (raw int value)
           *   score.formatted_value (formatted string)
           * 
           * To get lookup options:
           *   options.period
           *   options.tag
           *   options.social
           *   options.skip
           *   options.limit
           */
  
          console.debug(`name: ${score.user.name} score: ${score.value} period: ${options.period}`)
  
          // increment the rank number
          rank++;
      });
    }));
  }
}