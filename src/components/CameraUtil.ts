import Phaser from "phaser";

/* This class was made so each scene didn't have to have this duplicate code, but now it isn't 
necessary now because afterwards I created BasicScene, which this could all be put into.
*/

export default class CameraUtil {

    /**
     * Sets the name, adaptive zoom and fadein for a camera.
     * @param camera 
     * @param scene 
     */
    public static configureMainCamera(scene: Phaser.Scene)
        : Phaser.Cameras.Scene2D.Camera
    {
    // basic adaptive zoom
        const zoom = (scene.scale.width > 1000? 3 : 2);
        
        scene.cameras.main.setName('main');
		scene.cameras.main.setZoom(zoom);
        scene.cameras.main.fadeIn(200, 255, 255, 255);

        return scene.cameras.main;
    }

    /**
     * Create UI camerea, set name and zoom.
     * 
     * Also prerenders so resize functions can have accurate
     * @param scene 
     */
    public static createUICamera(scene: Phaser.Scene): Phaser.Cameras.Scene2D.Camera
    {
    // basic adaptive zoom
        const zoom = (scene.scale.width > 1000? 3 : 2);

        let camera = scene.cameras.add(0, 0, scene.scale.width, scene.scale.height);
		camera.setName('UICam')
		camera.setZoom(zoom);

		const _camera = camera as any;
        _camera.preRender(1);

        return _camera;
    }
}