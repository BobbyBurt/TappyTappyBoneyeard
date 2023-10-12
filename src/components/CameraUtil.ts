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
    public static configureMainCamera(scene: Phaser.Scene): Phaser.Cameras.Scene2D.Camera
    {
        const zoom = this.getAdaptiveZoom(scene);
        
        scene.cameras.main.setName('main');
		scene.cameras.main.setZoom(zoom);
        // scene.cameras.main.fadeIn(200, 255, 255, 255);

        return scene.cameras.main;
    }

    /**
     * 
     * @param scene 
     * @returns 
     */
    public static getAdaptiveZoom(scene: Phaser.Scene): number
    {
        let zoom = ((scene.scale.width > 1400 && scene.scale.height > 700) ? 3 : 2);

        if (scene.scale.zoom <= 0.5)
        {
            zoom++;
        }

        // return zoom;
        return 1;

        // const zoom = (scene.scale.height / 315);
            // this can create jagged pixel alignment. But not always.
    }

    public static scaleTest(scene: Phaser.Scene): number
    {
        return (scene.scale.width * scene.scale.zoom)
    }

    /**
     * TO BE DEPRECATED
     * 
     * Create UI camerea, set name and zoom.
     * 
     * Also prerenders so resize functions can have accurate
     * @param scene 
     */
    public static createUICamera(scene: Phaser.Scene): Phaser.Cameras.Scene2D.Camera
    {
        const zoom = this.getAdaptiveZoom(scene);

        let camera = scene.cameras.add(0, 0, scene.scale.width, scene.scale.height);
		camera.setName('UICam')
		camera.setZoom(zoom);

		const _camera = camera as any;
        _camera.preRender(1);

        return _camera;
    }
}