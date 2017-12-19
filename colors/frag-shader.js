// Color example
function getFragmentShader()
{
    const fsSource = `
        varying lowp vec4 vColor;

        uniform sampler2D uSampler;

        void main(void) {
          gl_FragColor = vColor;
        }
      `;
    return fsSource;
}