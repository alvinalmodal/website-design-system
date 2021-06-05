import "./App.css";
import Card from "./components/card/card";
import Header from "./components/header";
import Color from "./components/color";
import Font from "./components/font";

function App() {
  const cards = [
    {
      id: 1,
      cardTitle: "Colors",
      cardItems: [
        <Color
          key={1}
          colorName="Cool Blue"
          backgroundColor="#2d5dcc"
          foreColor="white"
        ></Color>,
        <Color
          key={2}
          colorName="Pink"
          backgroundColor="#d957d9"
          foreColor="black"
        ></Color>,
        <Color
          key={3}
          colorName="Mint Green"
          backgroundColor="#4fe0b0"
          foreColor="black"
        ></Color>,
        <Color
          key={4}
          colorName="Beige"
          backgroundColor="#efd9ca"
          foreColor="black"
        ></Color>,
      ],
      className: "card",
    },
    {
      id: 2,
      cardTitle: "Fonts",
      cardItems: [
        <div className="inline-block fonts">
          <Font
            key={1}
            fontFamily="Source Code Pro"
            fontWeight="normal"
            text="Source Code Pro"
            fontSize="22px"
            textDecoration="underline"
          ></Font>
          ,
          <Font
            key={2}
            fontFamily="Source Code Pro"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={3}
            fontFamily="Source Code Pro"
            fontWeight="bold"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={4}
            fontFamily="Source Code Pro"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            fontStyle="italic"
          ></Font>
        </div>,
        <div className="inline-block fonts">
          <Font
            key={1}
            fontFamily="Nunito Sans"
            fontWeight="normal"
            text="Nunito Sans"
            fontSize="22px"
            textDecoration="underline"
          ></Font>
          ,
          <Font
            key={2}
            fontFamily="Nunito Sans"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={3}
            fontFamily="Nunito Sans"
            fontWeight="bold"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={4}
            fontFamily="Nunito Sans"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            fontStyle="italic"
          ></Font>
        </div>,
        <div className="inline-block fonts">
          <Font
            key={1}
            fontFamily="Poppins"
            fontWeight="normal"
            text="Poppins"
            fontSize="22px"
            textDecoration="underline"
          ></Font>
          ,
          <Font
            key={2}
            fontFamily="Poppins"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={3}
            fontFamily="Poppins"
            fontWeight="bold"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            textDecoration=""
          ></Font>
          ,
          <Font
            key={4}
            fontFamily="Poppins"
            fontWeight="normal"
            text="The quick brown fox jumps over the lazy dog."
            fontSize="18px"
            fontStyle="italic"
          ></Font>
        </div>,
      ],
      className: "card",
    },
    {
      id: 3,
      cardTitle: "Text Styles",
      cardItems: [
        <div className="block heading">
          <h1>H1: Main page heading</h1>
          <ul>
            <li>Font-weight: 700 (bold)</li>
            <li>Font-size: 26px</li>
            <li>Font-family: Nunito Sans</li>
          </ul>
        </div>,
        <div className="block subheading">
          <h2>H2: Subheading</h2>
          <ul>
            <li>Font-weight: 500</li>
            <li>Font-size: 18px</li>
            <li>Font-family: Poppins</li>
          </ul>
        </div>,
        <div className="block paragraph">
          <p>P: Paragraph text</p>
          <ul>
            <li>Font-weight: 400</li>
            <li>Font-size: 14px</li>
            <li>Font-family: Poppins</li>
          </ul>
        </div>,
      ],
      className: "card",
    },
  ];
  const displayCards = (cards) => {
    return cards.map((card) => <Card key={card.id} card={card}></Card>);
  };
  return (
    <main className="main">
      <Header></Header>
      {displayCards(cards)}
    </main>
  );
}

export default App;
