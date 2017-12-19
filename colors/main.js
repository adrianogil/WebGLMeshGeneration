
function generateRandomVertexColors(meshObject)
{
    const totalVertices = meshObject.vertices.length;

    var colors = []

    for (var i = 0; i < totalVertices; i++)
    {
        var c = new GLColor(0.5 * Math.random(), 0.5 * Math.random(), 0.5 * Math.random(), 0.2 * Math.random() + 0.8);
        colors = colors.concat(
                c.r, c.g, c.b, c.a
            );
    }

    meshObject.addAttribBufferData("aVertexColor", colors, 4);
}

function main()
{
    GLManager.getGLFromSelector("#glcanvas");

    var scene = new GLScene("Teste");
    scene.transparentMode = false;
    scene.backgroundColor = new GLColor(0.3, 0.4, 0.5, 1.0);

    var p = new Vector3(1,1,0);
    var v1 = new Vector3(1,0,0);
    var v2 = new Vector3(0,1,0);
    var v3 = new Vector3(0,0,1);

    var cube = new GLMeshObject("cube");
    MeshBuilder.createCube(cube, p, v1, v2, v3);
    cube.transform.position.z += 5;
    scene.addObject(cube);

    generateRandomVertexColors(cube);

    function update(now)
    {
        cube.transform.rotate(new Vector3(0.0, -0.01, -0.01));

        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    GLManager.currentScene = scene;
    GLManager.run();
}