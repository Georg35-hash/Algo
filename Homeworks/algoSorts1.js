function buildLetterFrequency(text) {
  const freq = {};
  const cleanText = text.toLowerCase();

  for (let char of cleanText) {
    if (char >= 'a' && char <= 'z') {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  return freq;
}

const sampleText = `The quick brown fox jumps over the lazy dog.`;
const letterFreq = buildLetterFrequency(sampleText);

console.log(letterFreq);
