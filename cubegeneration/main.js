
function main()
{
    GLManager.getGLFromSelector("#glcanvas");

    var scene = new GLScene("Teste");

    GLManager.currentScene = scene;
    GLManager.run();
}