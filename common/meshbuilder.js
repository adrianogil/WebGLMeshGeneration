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

    addQuad(p,v1,v2)
    {
        this.addVertex(p);
        this.addVertex(p.add(v1));
        this.addVertex(p.add(v2));
        this.addVertex(p.add(v1).add(v2));

        this.addTriangle(0,1,3);
        this.addTriangle(0,3,1);
        this.addTriangle(0,2,3);
        this.addTriangle(0,3,2);
    }

    createMesh(meshObject)
    {
        meshObject.vertices = this.vertices;
        meshObject.triangles = this.triangles;
    }

    static createQuad(meshObject,p,v1,v2)
    {
        var meshBuilder = new MeshBuilder();
        meshBuilder.addQuad(p,v1,v2);

        return meshBuilder.createMesh(meshObject);
    }
}