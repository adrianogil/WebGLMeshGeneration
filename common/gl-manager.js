function onGLAnimationFrame(now)
{
    GLManager.onAnimationFrame(now);
}

var GLManager = new function()
{
    this.currentScene = null;
    this.paused = false;
    this.gl = null;
    this.projectionMatrix = null;

    this.onAnimationFrame = function(now)
    {
        now *= 0.001;   // convert to seconds
        GLTime.deltaTime = now - GLTime.time;
        GLTime.time = now;

        if (this.gl != null && this.currentScene != null) {
            this.currentScene.draw(this.gl);
        }

        if (!this.paused) {
            requestAnimationFrame(onGLAnimationFrame);
        }
    };

    this.pause = function()
    {
        this.paused = true;
    };

    this.onStart = function()
    {
        if (this.gl != null && this.currentScene != null) {
            this.currentScene.onStart(this.gl);
        }
    }

    this.run = function()
    {
        this.paused = false;
        if (this.gl != null && this.currentScene != null) {
            this.onStart();
            requestAnimationFrame(onGLAnimationFrame);
        }
    };

    this.getGLFromSelector = function(glSelector) {
        const canvas = document.querySelector("#glcanvas");
        // Initialize the GL context
        this.gl = canvas.getContext("webgl");
        // Only continue if WebGL is available and working
        if (!this.gl) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return false;
        }

        return true;
    };

    this.loadShader = function(type, source) {
      const shader = this.gl.createShader(type);

      // Send the source to the shader object
      this.gl.shaderSource(shader, source);

      // Compile the shader program
      this.gl.compileShader(shader);

      // See if it compiled successfully
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    //
    // Initialize a shader program, so WebGL knows how to draw our data
    //
    this.initShaderProgram = function(vsSource, fsSource)
    {
      const vertexShader = loadShader(this.gl, this.gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(this.gl, this.gl.FRAGMENT_SHADER, fsSource);

      // Create the shader program
      const shaderProgram = this.gl.createProgram();
      this.gl.attachShader(shaderProgram, vertexShader);
      this.gl.attachShader(shaderProgram, fragmentShader);
      this.gl.linkProgram(shaderProgram);

      // If creating the shader program failed, alert
      if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram));
        return null;
      }

      return shaderProgram;
    }
}