import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() language: string;

  welcomeSubTitle = '';
  textOne = '';
  textTwo = '';
  textThree = '';
  textFour = '';
  textFive = '';
  textSix = '';
  textSeven = '';
  textEight = '';


  constructor( private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadLanguage(this.language);
  }


  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  
  loadLanguage(language){

    switch(language){
      case 'EN':
            this.welcomeSubTitle = 'Ping Pong Score Keeper';
            this.textOne = 'It is an application designed to keep counting points in a ping pong game.';
            this.textTwo = 'Functionalities:';
            this.textThree = 'You can add the names of the players or teams.';
            this.textFour = 'You can keep track of the games won.';
            this.textFive = 'You can change who will start serving (Player 1 or Player 2).';
            this.textSix = 'You can change the number of services (2 services or 5 services).';
            this.textSeven = 'You can change all the options mentioned above as many times as you want.';
            this.textEight = 'Developed by ';
            break;
      case 'ES':
            this.welcomeSubTitle = 'Anotador de Ping Pong ';
            this.textOne = 'Es una aplicación diseñada para llevar el conteo de los puntos en un juego de ping pong.';
            this.textTwo = 'Funcionalidades:';
            this.textThree = 'Puede agregar los nombres de los jugadores o equipos.';
            this.textFour = 'Puede realizar un seguimiento de los juegos ganados.';
            this.textFive = 'Puede cambiar quién comenzará a servir (Jugador 1 o Jugador 2).';
            this.textSix = 'Puede cambiar la cantidad de servicios (2 servicios o 5 servicios).';
            this.textSeven = 'Puede cambiar todas las opciones mencionadas anteriormente tantas veces como desee.';
            this.textEight = 'Desarrollado por';
            break;
      case 'PT':
            this.welcomeSubTitle = 'Marcador de pontos de pingue-pongue';
            this.textOne = 'É uma aplicação desenhada para contar pontos em um jogo de pingue-pongue';
            this.textTwo = 'Funcionalidades:';
            this.textThree = 'Você pode adicionar os nomes dos jogadores ou times.';
            this.textFour = 'Você pode acompanhar os jogos vencidos.';
            this.textFive = 'Você pode alterar quem começará a servir (Jogador 1 ou Jogador 2).';
            this.textSix = 'Você pode alterar o número de serviços (2 serviços ou 5 serviços).';
            this.textSeven = 'Você pode alterar todas as opções mencionadas acima quantas vezes quiser.';
            this.textEight = 'Desenvolvido por';
            break;
      case '漢語':
            this.welcomeSubTitle = '乒乓球记分员';
            this.textOne = '它是一款旨在在乒乓球比赛中不断计分的应用程序。';
            this.textTwo = '功能：';
            this.textThree = '您可以添加球员或球队的名称。';
            this.textFour = '您可以跟踪获胜的游戏。';
            this.textFive = '您可以更改将开始提供服务的人（玩家 1 或玩家 2）。';
            this.textSix = '您可以更改服务数量（2个服 务或 5个服务）。';
            this.textSeven = '您可以根据需要多次更改上述所有选项。';
            this.textEight = '由开发';
            break;
    }
  }



}
