
function main()
{
    GLManager.getGLFromSelector("#glcanvas");

    var scene = new GLScene("Teste");
    scene.transparentMode = false;
    scene.backgroundColor = new GLColor(0.3, 0.4, 0.5, 1.0);

    var p = new Vector3(1,1,0);
    var v1 = new Vector3(2,0,0);
    var v2 = new Vector3(1,2,0);
    var v3 = new Vector3(0,0,1);

    var cube = new GLMeshObject("cube");
    MeshBuilder.createCube(cube, p, v1, v2, v3);

    cube.transform.position.z += 5;

    cube.addTexture(new GLTexture("cubetexture.png"));

    scene.addObject(cube);

    function update(now)
    {
        cube.transform.rotate(new Vector3(0.0, -0.01, -0.01));

        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    GLManager.currentScene = scene;
    GLManager.run();
}