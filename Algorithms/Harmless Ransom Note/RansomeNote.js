function harmlessRansomeNote(noteText, magazineText) {
	let noteArr = noteText.split(' ');
	let magazineArr = magazineText.split(' ');
	let magazineObj = {};

	magazineArr.forEach((word) => {
		if (!magazineObj[word]) {
			magazineObj[word] = 0;
		}
		magazineObj[word]++;
	});

	// console.log(magazineObj);

	let noteIsPossible = true;
	noteArr.forEach((word) => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) {
				noteIsPossible = false;
			}
		} else {
			noteIsPossible = false;
		}
	});

	return noteIsPossible;
}

console.log(harmlessRansomeNote('note', 'this is all the magazine text in the magazine'));
console.log(
	harmlessRansomeNote(
		'this is a secret note',
		'this is all the text in the magazine that has a secret embedded in the note that can be seen as a part of this file'
	)
);
