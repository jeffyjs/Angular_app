export class CounterService{
    ActiveToInActiveCounter = 0;
    InActiveToActiveCounter = 0; 
        
    incrementActiveToInactive(){
        this.ActiveToInActiveCounter ++;
        console.log('Active to Inactive : ' + this.ActiveToInActiveCounter);
    }

    incrementInActiveToActive(){
        this.InActiveToActiveCounter ++;
        console.log('Inactive to Active : '+this.InActiveToActiveCounter);
    }
}