/*
    retorna um email que pode ser legitimo ou um golpe/span
    por em quanto 50% chance de ser um ou outro
*/
//data
import emailsData, {trueEmails, fakeEmails} from '../data/emails'
import defaultDialogues, {
    initialDialogueArray,
    objectiveDialogueArray,
    gameOverDialogue,
    victoryDialogue,
    helpsDialogueArray,
    helpFilureDialogue,
} from '../data/defaultDialogues';
import Rng1 from './Rng';
import Rng2 from './Rng';

var starded = false;

var showInitialDialog = true;
var isFake = false;

var currentEmail;
var remainingHelps = [...helpsDialogueArray];

var maxHelp = 5;
var maxSuccesse = 10;
var maxFailure = 10;

var helpCount = maxHelp;
var successeCount = 0;
var failureCount = 0;

const GameManager = {
    onFailure: () => {}, 
    onSucess: () => {},
    onGameStart: () => {},
    onGameEnd: () =>{},
    onGameOver: () => {},
    onGameWin: () => {},

    starded: function(){
        return starded;
    },
    start: function(){
        console.log("jogo iniciado");
        starded = true;
        currentEmail = createEmail();
        this.onGameStart();
    },
    end: function(){
        console.log("jogo acabou");

        starded = false;
        helpCount = maxHelp;
        successeCount = 0;
        failureCount = 0;
        currentEmail = undefined;
        showInitialDialog = false;

        this.onGameEnd();
    },

    getEmail: function() {
        return currentEmail;
    },
    nextEmail: function() {
        if(!starded) return;
        
        currentEmail = createEmail();
        return currentEmail;
    },
    checkEmail: function(attempt) {
        if(attempt != isFake){
            console.log("resposta correta");
            successeCount++; 
            this.onSucess();

            if(successeCount >= maxSuccesse){
                console.log("você venceu");
                this.onGameWin();
                this.end();
            }
        }else{
            failureCount++;
            console.log("resposta errada");
            this.onFailure();

            if(failureCount >= maxFailure){
                console.log("você perdeu");
                this.onGameOver();
                this.end();
            }
        }
    },
    getInitialDialogueArray: function() {
        return (showInitialDialog)? [...initialDialogueArray, ...objectiveDialogueArray] : [...objectiveDialogueArray];
    },
    getObjectiveDialogueArray: function() {
        return [...objectiveDialogueArray];
    },
    getHelpDialogue: function() {
        //dialgogo inicial é sempre o mesmo
        if(remainingHelps.length === helpsDialogueArray){
            let dialog = remainingHelps[0];
            remainingHelps.splice(0, 1);
            return dialog;

        }else if(helpCount - 1 < 0) {
            return helpFilureDialogue;
            
        }else {
            helpCount -= 1;

            Rng2.next();
            let rand = Rng2.getRandomInt(remainingHelps.length);
            let dialog = remainingHelps[rand];
            remainingHelps.splice(rand, 1);

            return dialog;
        }
    },

    getMaxHelp: function() {return maxHelp},
    getMaxSuccesse: function() {return maxSuccesse},
    getMaxFailure: function() {return maxFailure},

    getHelpCount: function() {return helpCount},
    getSuccesseCount: function() {return successeCount},
    getFailureCount: function() {return failureCount},
}

function createEmail() {
    if(Rng1.getRandom() > 0.5){
        Rng1.next();
        isFake = true;
        return fakeEmails[Rng1.getRandomInt(fakeEmails.length)];
    } else{
        Rng1.next();
        isFake = false;
        return trueEmails[Rng1.getRandomInt(trueEmails.length)];
    }
}

export default GameManager;

