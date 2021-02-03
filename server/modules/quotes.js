let index = 0;

const quotesData = [
  {
    quote:
      "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: 'Emma Watson',
  },
  {
    quote:
      "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: 'Scott Adams',
  },
  {
    quote: 'Intelligence plus character-that is the goal of true education.',
    author: 'Martin Luther King, Jr.',
  },
];

function getNextQuote() {
  // const quotesData = [
  //   {
  //     quote:
  //       "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
  //     author: 'Emma Watson',
  //   },
  //   {
  //     quote:
  //       "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
  //     author: 'Scott Adams',
  //   },
  //   {
  //     quote: 'Intelligence plus character-that is the goal of true education.',
  //     author: 'Martin Luther King, Jr.',
  //   },
  // ];

  const result = quotesData[index];
  index += 1;
  index = index % quotesData.length; // Ensures the API always returns a value;
  console.log(result);
  return result;
}

function addQuote(quoteData) {
  quotesData.push(quoteData);
  console.log('Number of new quotes ', quotesData.length);
  return true;
}

// current vs of js allows us to use just one name for our exported functions if they are the same as the key
// i.e. this would look like module.exports = { getNextQuote: getNextQuote, addQuote: addQuote };

module.exports = { getNextQuote, addQuote };
