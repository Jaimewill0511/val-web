import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import IMG_0537 from "./assets/IMG_0537.JPEG";
// import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
// import pandinha_martelo from "./assets/pandinha_martelo.png";
// import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
// import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
// import eddyS2Lidiane from "./assets/eddyS2Lidiane.jpeg";

const App = () => {
  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="Meet Bear-he and Bear-she"
        text="They have known each other for almost 2 years, and are friends, but wait they are more than that... they are in love🤟."
        sequency="1"
        btnText="Continue"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Bear-she"
        text="The Bear-she is very cute, she always cares about others and she is very hardworking too. And she is going to be the best"
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Bear she"
        text="Bear-he loves making Bear-she blush because he is very sweet and she always cant contain her excitment..."
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Bear-she ♥ Bear-he"
        text="As I've already said, these two are dating, they are not perfect... but they always help each other and overcome problems together."
        btnText="Continue"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Sad Bear-she."
        text="Sometimes Bear-she gets sad about some things, and ends up crying and sad... :( But the little bear always comes to try to cheer her up and almost always manages to make her laugh"
        btnText="Continue"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Sad Bear-he"
        text="Sometimes it's the Bear-he who gets sad about some problems, and then the Bear-she comes with her love and cuteness and helps the Bear-he when he's sad. :)"
        btnText="Continue"
        sequency="6"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="The love of the little bear"
        text="Bear-he sends bear-she flowers because she likes them..."
        btnText="Awww <3"
        sequency="7"
      />
      {/* <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="The love of the little panda."
        text=""
        btnText="Awww <3"
        sequency="11"
      /> */}
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="In everything, the two are well and happy... and do many things together as friends and partners that they are."
        btnText="Continue"
        sequency="8"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="They walk together."
        text="The two love to spend time together, laugh a lot especially and gossip with one another"
        btnText="Walking.."
        sequency="9"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="They take photos together."
        text="Bear-she always wants to look perfect in the photos and keeps asking the bear-he to take them again.😂"
        btnText="More cute photos..."
        sequency="10"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="They love to eat and  together"
        text="Teddy and panda love to drink together, and enjoy the good times with some movies."
        btnText="Netflix and chill...😈"
        sequency="11"
      />
      {/* <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="A ursinha fica brincando com o ursinho"
        text="Parece divertido olhando assim hahaha ... para a ursinha é claro... olha o coitado do ursinho, olha a cara pandinha! ~coitado_gente"
        btnText="Mordidas depois..."
        sequency="16"
      /> */}
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="At night"
        btnText="They sleep"
        text="When the bear-she can't stay awake any longer talking to bear-he, they say goodbye and pretend to sleep together."
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And finally they sleep"
        text="Tho they have tough times sometimes, and cry, and get annoyed... but when everything falls into place, they love each other a lot and laugh."
        btnText="They sleep"
        sequency="13"
      />
      <Screen
        imageUrl={IMG_0537}
        bgColor={colors.red}
        textColor={colors.white}
        title="Will you be my Valentine?"
        text="I finally thought of something that nobody has ever given you and that I have never given to anyone... I hope you liked it. I love you, Teni, like I have never loved anyone..."
        btnText="Finish"
        sequency="14"
      />
    </div>
  );
};

export default App;
