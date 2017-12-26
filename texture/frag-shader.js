// Color example
function getFragmentShader()
{
    const fsSource = `
        varying highp vec2 vTextureCoord;

        uniform sampler2D _MainTex;

        void main(void) {
          gl_FragColor = texture2D(_MainTex, vTextureCoord);
        }
      `;
    return fsSource;
}