class GLWireMeshObject extends GLMeshObject
{
    constructor(objectname)
    {
        super(objectname);

        this.wireQuadCoord = [];

        this.wireQuadCoordName = "aWireQuadCoord";
        this.wireQuadSize = 4;

        var attribNames = [this.bufferPositionName, this.wireQuadCoordName];
        var uniformNames = ["uModelViewMatrix", "uProjectionMatrix"];

        this.material = new GLMaterial(attribNames, uniformNames);
    }

    createBuffers(gl)
    {
        super.createBuffers(gl);

        // Create buffers for quad coord
        this.buffers[this.wireQuadCoordName] = new GLBuffer(
            gl.ARRAY_BUFFER,
            gl.FLOAT,
            this.wireQuadSize
            );
        this.buffers[this.wireQuadCoordName].createBuffer(gl, this.wireQuadCoord);
    }

    enableBuffers(gl)
    {
        super.enableBuffers(gl);

        this.buffers[this.wireQuadCoordName].enableBuffer(gl,
              this.material.getAttrib(this.wireQuadCoordName));
    }
}