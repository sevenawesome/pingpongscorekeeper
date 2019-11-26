import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-win',
  templateUrl: './modal-win.page.html',
  styleUrls: ['./modal-win.page.scss'],
})
export class ModalWinPage implements OnInit {
  @Input() winnerName: string;
  @Input() winnerPoints: string;
  @Input() loserName: string;
  @Input() loserPoints: string;
  @Input() language: string;

  winnerMessage = '';
  winnerSubOneMessage = '';
  winnerSubTwoMessage = '';
  winnerSubThreeMessage = '';
  winnerSubFourMessage = '';
  winnerSubFiveMessage = '';
  buttonNextGame = '';


  constructor( private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadLanguage(this.language)
  }

  loadLanguage(language){

    switch(language){
      case 'EN':
            this.winnerMessage = 'You\'re the winner!';
            this.winnerSubOneMessage = 'You beat';
            this.winnerSubTwoMessage = 'with';
            this.winnerSubThreeMessage = 'to';
            this.winnerSubFourMessage = 'points';
            this.winnerSubFiveMessage = 'The truth is that you are the best!';
            this.buttonNextGame = 'Next game';
            break;
      case 'ES':
            this.winnerMessage = 'Tu eres el ganador!';
            this.winnerSubOneMessage = 'Venciste a';
            this.winnerSubTwoMessage = 'con';
            this.winnerSubThreeMessage = 'a';
            this.winnerSubFourMessage = 'puntos';
            this.winnerSubFiveMessage = 'La verdad que eres el mejor!';
            this.buttonNextGame = 'Siguiente juego';
            break;
      case 'PT':
            this.winnerMessage = 'Você é o vencedor!';
            this.winnerSubOneMessage = 'Você venceu';
            this.winnerSubTwoMessage = 'com';
            this.winnerSubThreeMessage = 'à';
            this.winnerSubFourMessage = 'pontos';
            this.winnerSubFiveMessage = 'A verdade é que você é o melhor!';
            this.buttonNextGame = 'Próximo jogo';
            break;

      case '漢語':
          this.winnerMessage = '你是赢家！';
          this.winnerSubOneMessage = '你打';
          this.winnerSubTwoMessage = '与';
          this.winnerSubThreeMessage = '至';
          this.winnerSubFourMessage = '点数';
          this.winnerSubFiveMessage = '事实是，你是最棒的！';
          this.buttonNextGame = '下一场比赛';
        break;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
