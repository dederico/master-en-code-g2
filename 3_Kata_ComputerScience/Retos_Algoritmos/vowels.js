getVowels = (input) => {
    const vowels = 'aeiou';
    for (i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            console.log(input[i])
        } else {
            console.log(input[i] + " it's not a vowel.")
        }
    }
}
getVowels('australia')