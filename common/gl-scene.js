class GLScene
{
    constructor(sceneName)
    {
        this.name = sceneName;
        this.objects = []
        this.backgroundColor = GLColor.Black(); // Clear to black, fully opaque
    }

    onStart(gl)
    {
        const totalObjects = this.objects.length;

        for (var i = 0; i < totalObjects; i++)
        {
            this.objects[i].onStart(gl);
        }
    }

    draw(gl)
    {
        this.onSceneFrameBegin(gl);

        const totalObjects = this.objects.length;

        for (var i = 0; i < totalObjects; i++)
        {
            this.objects[i].draw(gl);
        }
    }

    onSceneFrameBegin(gl)
    {
        gl.clearColor(this.backgroundColor.r,
                      this.backgroundColor.g,
                      this.backgroundColor.b,
                      this.backgroundColor.a);

        gl.clearDepth(1.0);                   // Clear everything
        gl.enable(gl.DEPTH_TEST);             // Enable depth testing
        gl.depthFunc(gl.LEQUAL);              // Near things obscure far things

        // Clear the canvas before we start drawing on it
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const totalObjects = this.objects.length;

        for (var i = 0; i < totalObjects; i++)
        {
            this.objects[i].onFrameBegin(gl);
        }
    }
}