class MeshBuilder
{
    constructor()
    {
        this.vertices = [];
        this.triangles = [];
    }

    addVertex(v) {
        this.vertices = this.vertices.concat(v);
    }

    addTriangle(t1,t2,t3) {
        this.triangles = this.triangles.concat(t1,t2,t3);
    }
}