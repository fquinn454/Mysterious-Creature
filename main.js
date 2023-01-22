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
    dna = mockUpStrand();
    let individual = pAequorFactory(specimenNum, dna);
    if(individual.willLikelySurvive()){
      sample.push(individual);
      specimenNum++;
    }
  }
  return sample;
}



//Tests
dna1 = mockUpStrand();
dna2 = mockUpStrand();
console.log(dna1);
console.log(dna2);
p1 = pAequorFactory(1, dna1);
p2 = pAequorFactory(2, dna2);
p1.compareDNA(p2);
console.log(p1.willLikelySurvive());
console.log(p2.willLikelySurvive());
console.log(createSampleArr());









