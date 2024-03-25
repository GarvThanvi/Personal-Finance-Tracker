import { useEffect, useState } from "react";

const FinancialAdvice = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const financialQuotes = {
    1: "The stock market is a device for transferring money from the impatient to the patient. - Warren Buffett",
    2: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas. - Paul Samuelson",
    3: "The goal of a successful trader is to make the best trades. Money is secondary. - Alexander Elder",
    4: "The stock market is filled with individuals who know the price of everything, but the value of nothing. - Philip Fisher",
    5: "Do not save what is left after spending, but spend what is left after saving. - Warren Buffett",
    6: "Risk comes from not knowing what you're doing. - Warren Buffett",
    7: "It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for. - Robert Kiyosaki",
    8: "The best investment you can make is in yourself. - Warren Buffett",
    9: "The stock market is designed to transfer money from the active to the patient. - Warren Buffett",
    10: "The more you learn, the more you earn. - Warren Buffett",
    11: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble. - Warren Buffett",
    12: "Price is what you pay. Value is what you get. - Warren Buffett",
    13: "In investing, what is comfortable is rarely profitable. - Robert Arnott",
    14: "The four most dangerous words in investing are: 'This time it's different.' - Sir John Templeton",
    15: "The market is a device for transferring money from the inpatient to the patient. - Warren Buffett",
    16: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong. - George Soros",
    17: "The stock market is a no-called-strike game. You don’t have to swing at everything – you can wait for your pitch. - Warren Buffett",
    18: "The goal of a successful trader is to make the best trades. Money is secondary. - Alexander Elder",
    19: "The first rule is not to lose. The second rule is not to forget the first rule. - Warren Buffett",
    20: "Successful investing is about managing risk, not avoiding it. - Benjamin Graham",
  };

  useEffect(() => {
    const getRandomQuote = () => {
      const quoteKeys = Object.keys(financialQuotes);
      const randomKey = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
      return financialQuotes[randomKey];
    };

    const randomQuote = getRandomQuote();
    setRandomQuote(randomQuote);

  }, []);

  return (
    <div className="financial">
      <p className="quote">{randomQuote}</p>
      <img className="fin-img" src="./advice.png" alt="" />
    </div>
  );
};
export default FinancialAdvice;
