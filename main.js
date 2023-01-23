// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function to create new P.aequor individuals
function pAequorFactory(num, arr){
  return {
    _specimenNumber: num,
    dna: arr,
    mutate(){
      // Generate random number between 0 - 14
      const baseNumber = Math.floor(Math.random() * 15);
      // Record the original value of the base that will change during mutation
      const baseToChange = this.dna[baseNumber];
      // Choose a random base (different from original) to replace base to change
      while(this.dna[baseNumber ] === baseToChange){
        this.dna[baseNumber] = returnRandBase();
      }
    },
    // compare this.dna to the parameter p.aequor.dna and print a string stating the % similarity of the dna
    compareDNA(pAequor){
      let sameBaseCount = 0;
      for(i = 0; i < pAequor.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          sameBaseCount++;
        }
      }
      let percentageSimilarity = Math.round(sameBaseCount/pAequor.dna.length * 100);
      console.log(`Specimen #${this._specimenNumber} and Specimen #${pAequor._specimenNumber} have ${percentageSimilarity}% DNA in common`);
    }, 

    // p.aequor objects with dna that is >= 60% C or G bases are likely to survive. Return boolean
    willLikelySurvive(){
      let countCAndG = 0;
      for(i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'G' || this.dna[i] === 'C'){
          countCAndG++;
        }
      }
      if(Math.floor((countCAndG/this.dna.length)*100 >= 60)){
        return true;
      }
      else{
        return false;
      }
    },


    // Helper function return the % similarity in the this.dna to parameter pAequor.dna as a number
    compareDnaPercentage(pAequor){
      let sameBaseCount = 0;
      for(i = 0; i < pAequor.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          sameBaseCount++;
        }
      }
      return Math.round(sameBaseCount/pAequor.dna.length * 100);
    }
  };
};

/*
Create an array containing 30 P.Aequor individuals
who are likely to survive (60% or more C/G bases)
*/
function createSampleArr(){
  let specimenNum = 1;
  const sample = [];
  while(sample.length < 30){
    let individual = pAequorFactory(specimenNum, mockUpStrand());
    if(individual.willLikelySurvive()){
      sample.push(individual);
      specimenNum++;
    }
  }
  return sample;
}

// EXTENSTION return complementary DNA strand
function complementaryDna(pAequor){
  let complementaryStrand = [];
  let dnaStrand = pAequor.dna;
  for(i = 0; i < dnaStrand.length; i++){
    switch(dnaStrand[i]){
      case 'A' : complementaryStrand.push('T');
        break;
      case 'T' : complementaryStrand.push('A');
        break;
      case 'G' : complementaryStrand.push('C');
        break;
      case 'C' : complementaryStrand.push('G');
        break;
      default :
        console.log('Error in DNA sequence');
        break;
    }
  }
  return complementaryStrand;
}

/*
EXTENSION return the two most related organisms in sample array
Starting with the first paequor in the array, compare its dna to all other paequor objects
to find the two with the most similar dna
*/
function mostRelated(sampleArr){
  let mostRelated = -1;
  let organism1 = 0;
  let organism2 = 0;
// loop through the array comparing the dna of each p.aequor objects to all other p.aequor objects
  for(let i = 0; i < sampleArr.length; i++){
    for(let j = 0; j < sampleArr.length; j++){
      let newPercentage = sampleArr[i].compareDnaPercentage(sampleArr[j]);
      // provided they are not the same object and are more similar than the previous closest two 
      if(i !== j && newPercentage > mostRelated){
        mostRelated = newPercentage;
        organism1 = sampleArr[i];
        organism2 = sampleArr[j];
      }
    }
  }
  console.log(`Specimen #${organism1._specimenNumber} and Specimen #${organism2._specimenNumber} are the most closely related individuals. 
  They have ${mostRelated}% DNA in common`)
}



//Tests
dna1 = mockUpStrand();
dna2 = mockUpStrand();
sample = createSampleArr();
p1 = pAequorFactory(1, dna1);
console.log(p1.dna);
console.log(complementaryDna(p1));
console.log(sample[0].compareDNA(sample[1]));
mostRelated(sample);








