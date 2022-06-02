import './App.css';
import mesa from './img/mesa.png';

function App() {
  return (
    <div className='container'>
      
      <div className='loader'></div>

      <div className='background'>
        <div className='mesa-bg'>
          <img src={mesa} alt="Instant Faro Mesa" />
        </div>

        <div className='mesa'>
          <div className='left-side'>
            <div className='header'>
              <h1 className='title'>Instant Faro</h1>
              <p className='version'>v1.0</p>
            </div>
            <div className='actions'>

              {/* ### FIRST ROW ### */}
              <div className='row'>

                <div className='group'>
                  <div id='button_q' className='button'>Q</div>
                  <div className='label'>QUE ISSO</div>
                </div>

                <div className='group'>
                  <div id='button_w' className='button'>W</div>
                  <div className='label'>SEM GRAÇA</div>
                </div>
                
                <div className='group'>
                  <div id='button_e' className='button'>E</div>
                  <div className='label'>POIN</div>
                </div>

                <div className='group'>
                  <div id='button_r' className='button'>R</div>
                  <div className='label'>POM</div>
                </div>

                <div className='group'>
                  <div id='button_t' className='button'>T</div>
                  <div className='label'>TOME</div>
                </div>

                <div className='group'>
                  <div id='button_y' className='button'>Y</div>
                  <div className='label'>PARE</div>
                </div>

                <div className='group'>
                  <div id='button_u' className='button'>U</div>
                  <div className='label'>UUUII</div>
                </div>
              </div>

              {/* ### SECOND ROW ### */}
              <div className='row'>

                <div className='group'>
                  <div id='button_a' className='button'>A</div>
                  <div className='label'>AI</div>
                </div>

                <div className='group'>
                  <div id='button_s' className='button'>S</div>
                  <div className='label'>SOCO</div>
                </div>
                
                <div className='group'>
                  <div id='button_d' className='button'>D</div>
                  <div className='label'>DANÇA</div>
                </div>

                <div className='group'>
                  <div id='button_f' className='button'>F</div>
                  <div className='label'>FAIL</div>
                </div>

                <div className='group'>
                  <div id='button_g' className='button'>G</div>
                  <div className='label'>ELE GOSTA</div>
                </div>

                <div className='group'>
                  <div id='button_h' className='button'>H</div>
                  <div className='label'>POTÊNCIA</div>
                </div>

                <div className='group'>
                  <div id='button_j' className='button'>J</div>
                  <div className='label'>JESUS</div>
                </div>
              </div>

              {/* ### THIRD ROW ### */}
              <div className='row'>

                <div className='group'>
                  <div id='button_z' className='button'>Z</div>
                  <div className='label'>ABRLUABRLU</div>
                </div>

                <div className='group'>
                  <div id='button_x' className='button'>X</div>
                  <div className='label'>XIII</div>
                </div>
                
                <div className='group'>
                  <div id='button_c' className='button'>C</div>
                  <div className='label'>CAVALO</div>
                </div>

                <div className='group'>
                  <div id='button_v' className='button'>V</div>
                  <div className='label'>DEMAIS</div>
                </div>

                <div className='group'>
                  <div id='button_b' className='button'>B</div>
                  <div className='label'>BRINCADEIRA</div>
                </div>

                <div className='group'>
                  <div id='button_n' className='button'>N</div>
                  <div className='label'>NÃO</div>
                </div>

                <div className='group'>
                  <div id='button_m' className='button'>M</div>
                  <div className='label'>FAIL 2</div>
                </div>
              </div>

            </div>

            <div className='line'></div>
          </div>

          <div className='right-side'>

            <div className='screen'>
              <div className='song'>
                <p id='trackNumber'>000</p>
                <p id='trackTitle'>SELECIONE O EFEITO</p>
              </div>
              <div className='type'>
                <p id='trackSubtitle'>SOUND FX</p>
              </div>
            </div>
      {/* 
          <div className='bgm'>
            <div className='group'>
              <div id='button_1' className='button'>1</div>
              <div className='label'>BGM 1</div>
            </div>
            <div className='group'>
              <div id='button_2' className='button'>2</div>
              <div className='label'>BGM 2</div>
            </div>
            <div className='group'>
              <div id='button_3' className='button'>3</div>
              <div className='label'>BGM 3</div>
            </div>
          </div>       */}

            <div className='options'>
              <div className='fake-buttons'>
                <div className='stop'>
                  <i className='fa-solid fa-stop'></i>
                </div>
                <div className='play'>
                  <i className='fa-solid fa-play'></i>
                </div>
                <div className='rec'>
                  <i className='fa-solid fa-circle'></i>
                </div>
              </div>

              <div className='share-buttons'>
                <a className='twitter' href='http://twitter.com/share?text=Efeitos Sonoros Rodrigo Faro&url=https://ldequadra.github.io/instant-faro'>
                  <i class="fa-brands fa-twitter"></i>
                </a>

                <a className='whatsapp'
                href='https://api.whatsapp.com/send/?text=Efeitos Sonoros Rodrigo Faro https://ldequadra.github.io/instant-faro&app_absent=0'>
                  <i class="fa-brands fa-whatsapp"></i>
                </a>

                <a className='github' href='https://github.com/ldequadra/instant-faro'>
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              
            </div>
          </div>

        </div>
      
        <div className='footer'>
          <p>Developed by <a href='https://twitter.com/ldequadra'>Luiz de Quadra</a> inspired by <a href='https://leodlabs.github.io/instant-ratinho/'>Instant Ratinho</a></p>
        </div>
      </div>

    </div>
  );
}

export default App;
