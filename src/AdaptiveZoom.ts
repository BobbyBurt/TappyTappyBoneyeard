// TODO: make a better solution

export default class AdaptiveZoom
{
    /**
     * Incrementally zoom out until min view is visible
     * @param {Phaser.Cameras.Scene2D.Camera} camera 
     * @param {Number} minWidth 
     * @param {Number} minHeight DEPRECATED
     */
	setAdaptiveZoom(camera:any, minWidth:any, minHeight:any)
		// TODO: specify type
    {
		let maxIncrements = 30;
        
        camera.setZoom(1);

		if (camera.scene.scale.width < minWidth || camera.scene.scale.height < minHeight)
        {
			for(let i = 0; i < maxIncrements; i++)
            {
				camera.setZoom(1 - (i * .05));

				// check min
				// console.log('w: ' + this.cameras.main.width / (1 - (i * .05)))
				// console.log('h: ' + this.cameras.main.height / (1 - (i * .05)))

				if
                (
					(camera.width / (1 - (i * .05))) > minWidth &&
					(camera.height / (1 - (i * .05))) > minHeight
				) 
				{
                    console.log('AdaptiveZoom increments: ' + i + ', zoom: ' + camera.zoom);
					break;
				}
			}
		}
	}
}