import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalWinPage } from '../../modals/modal-win/modal-win.page';
import { ModalInfoPage } from '../../modals/modal-info/modal-info.page';
import { BrowserStack } from 'protractor/built/driverProviders';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild("full",{static:true}) nameField: ElementRef;

  /*START PANEL ONE*/
  welcomeTitle = '';
  welcomeSubTitle = '';
  buttonColorEN = ''; 
  buttonColorES = ''; 
  buttonColorPT = ''; 
  buttonColorInput = ''; 
  buttonPlay = ''; 
  buttonReadyToPlay = ''; 
  addTitle = '';
  players = [];
  playerValue : string;
  languageSelected : string;
  showWelcomePanel : boolean;
  showHomePanel : boolean;
  showDashBoardPanel : boolean;
  showPlayGamePanel : boolean;
  showServePanel : boolean;
  serveAmount  = 2;
  configuredByFirstTime : boolean;
  autoFocusValue : boolean;
  /*END PANEL ONE*/

  /*START PANEL TWO*/
  titleDashboard = '';
  selectPlayerOneLabel = '';
  selectPlayerTwoLabel = '';
  serveLabel = '';
  pointLabel = '';
  counterPlayerOne = 0;
  counterPlayerTwo = 0;
  servingPlayerOne: boolean;
  servingPlayerTwo: boolean;
  servingCounter = 0;
  playerOneName = '';
  playerTwoName = '';
  wePlaying:boolean;
  stopPlaying:boolean;
  playerLabel = '';
  gameName = '';
  clickLabel = '';
  playLabel = '';
  stopLabel = '';
  tabGameLabel = '';
  tabDashBoardLabel = '';
  tabServeLabel = '';
  tabPlayerLabel = '';
  tabAboutLabel = '';
  okLabel = '';
  cancelLabel = '';
  confimationCancelMessage = '';
  btnResetGames = '';
  confTitle = '';
  confQuestionOne = '';
  confQuestionTwo = '';
  confTimes = '';
  /*END PANEL TWO*/

/*START CONFIRMATION RESET GAMES*/
  confirmationHeader = '';
  confirmationMessage = '';
  confirmationButtonOk = '';
  confirmationButtonCancel = '';
/*END CONFIRMATION RESET GAMES */

/*START CONFIRMATION DELETE PLAYER*/
confirmationPlayerMessage = '';

/*END CONFIRMATION DELETE PLAYER*/


  constructor(public alertController: AlertController,
    public modalController: ModalController) {}

  ngOnInit(): void {
    this.loadLanguage('EN');
    this.buttonColorInput = 'white';
    this. playerValue = '';
    this.showWelcomePanel = true;
    this.showHomePanel = false;
    this.servingPlayerOne = true;
    this.servingPlayerTwo = false;
    this.wePlaying = false;
    this.stopPlaying = false;
    this.configuredByFirstTime = false;
    this.autoFocusValue = true;
  }

  loadLanguage(language){

    this.languageSelected = language;

    switch(language){
      case 'EN':
          this.welcomeTitle = 'Welcome to';
          this.welcomeSubTitle = 'Ping Pong Score Keeper';
          this.addTitle = 'Add a player name or a team\'s name';
          this.buttonPlay = 'Play'; 
          this.buttonReadyToPlay = 'Ready to play';
          this.titleDashboard = 'Games Board';
          this.selectPlayerOneLabel = 'Player 1';
          this.selectPlayerTwoLabel = 'Player 2';
          this.serveLabel = 'Serve';
          this.pointLabel = 'Point';
          this.confirmationHeader = 'Question';
          this.confirmationMessage = 'Are you sure you want to delete the record of all games won?';
          this.confirmationButtonOk = 'Yes, I\'m sure';
          this.confirmationButtonCancel = 'Don\'t do it';
          // tslint:disable-next-line: max-line-length
          this.confirmationPlayerMessage = 'Are you sure you want to remove this player from the list?. Remember that the record of your won games will be lost.';
          this.playerLabel = 'Player';
          this.gameName = 'Ping pong';
          this.clickLabel = 'click the name of a player to change it';
          this.playLabel = 'Play';
          this.stopLabel = 'Stop';
          this.tabGameLabel = 'Game';
          this.tabDashBoardLabel = 'Dashboard';
          this.tabServeLabel = 'Serve';
          this.tabPlayerLabel = 'Players';
          this.tabAboutLabel = 'About';
          this.okLabel = 'Ok';
          this.cancelLabel = 'Cancel';
          this.confimationCancelMessage = 'Are you sure you want to finish the game?';
          this.btnResetGames = 'Reset Games';
          this.confTitle = 'CONFIGURATION';
          this.confQuestionOne = 'Who serves?';
          this.confQuestionTwo = 'Amount of services?';
          this.confTimes = 'times';
          break;
      case 'ES':
          this.welcomeTitle = 'Bienvenido a';
          this.welcomeSubTitle = 'Anotador de Ping Pong ';
          this.addTitle = 'Agregar un nombre de un jugador o el nombre de un equipo';
          this.buttonPlay = 'Jugar'; 
          this.buttonReadyToPlay = 'Listo para jugar';
          this.titleDashboard = 'Tablero de juegos';
          this.selectPlayerOneLabel = 'Jugador 1';
          this.selectPlayerTwoLabel = 'Jugador 2';
          this.serveLabel = 'Servir';
          this.pointLabel = 'Punto';
          this.confirmationHeader = 'Pregunta';
          this.confirmationMessage = '¿Estás seguro de que deseas eliminar el registro de todos los juegos ganados?';
          this.confirmationButtonOk = 'Si estoy seguro';
          this.confirmationButtonCancel = 'No lo haga';
          // tslint:disable-next-line: max-line-length
          this.confirmationPlayerMessage = '¿Esta seguro que desea eliminar este jugador de la lista?. Recuerde que el registro de sus juegos ganados se perderan.';
          this.playerLabel = 'Jugador';
          this.gameName = 'Ping pong';
          this.clickLabel = 'clic en el nombre de un jugador para cambiarlo';
          this.playLabel = 'Jugar';
          this.stopLabel = 'Detener';
          this.tabGameLabel = 'Juego';
          this.tabDashBoardLabel = 'Tablero';
          this.tabServeLabel = 'Servir';
          this.tabPlayerLabel = 'Jugadores';
          this.tabAboutLabel = 'Acerca de';
          this.okLabel = 'Ok';
          this.cancelLabel = 'Cancelar';
          this.confimationCancelMessage = '¿Estás seguro de que quieres terminar el juego?';
          this.btnResetGames = 'Restablecer juegos';
          this.confTitle = 'CONFIGURACIÓN';
          this.confQuestionOne = 'Quien sirve?';
          this.confQuestionTwo = 'Cantidad de servicios?';
          this.confTimes = 'veces';
          break;
      case 'PT':
          this.welcomeTitle = 'Bem-vindo ao';
          this.welcomeSubTitle = 'Marcador de pontos de pingue-pongue';
          this.addTitle = 'Adicione o nome de um jogador ou o nome de um time';
          this.buttonPlay = 'Brincar'; 
          this.buttonReadyToPlay = 'Pronto para jogar';
          this.titleDashboard = 'Tabuleiro de jogos';
          this.selectPlayerOneLabel = 'Jogador 1';
          this.selectPlayerTwoLabel = 'Jogador 2';
          this.serveLabel = 'Servir';
          this.pointLabel = 'Ponto';
          this.confirmationHeader = 'Pergunta';
          this.confirmationMessage = 'Tem certeza de que deseja excluir o registro de todos os jogos ganhos?';
          this.confirmationButtonOk = 'Tenho certeza';
          this.confirmationButtonCancel = 'Não o faça';
          // tslint:disable-next-line: max-line-length
          this.confirmationPlayerMessage = 'Tem certeza de que deseja remover este jogador da lista?. Lembre-se de que o recorde de seus jogos vencidos será perdido.';
          this.playerLabel = 'Jogador';
          this.gameName = 'pingue-pongue';
          this.clickLabel = 'clique no nome de um jogador para alterá-lo';
          this.playLabel = 'Jogar';
          this.stopLabel = 'Pare';
          this.tabGameLabel = 'Jogos';
          this.tabDashBoardLabel = 'Tabuleiro';
          this.tabServeLabel = 'Servir';
          this.tabPlayerLabel = 'Jogadoras';
          this.tabAboutLabel = 'Sobre';
          this.okLabel = 'Ok';
          this.cancelLabel = 'Cancelar';
          this.confimationCancelMessage = 'Tem certeza de que deseja terminar o jogo?';
          this.btnResetGames = 'Redefinir jogos';
          this.confTitle = 'CONFIGURAÇÃO';
          this.confQuestionOne = 'Quem serve?';
          this.confQuestionTwo = 'Quantidade de serviços?';
          this.confTimes = 'vezes';
          break;

          case '漢語':
            this.welcomeTitle = '欢迎来到 ';
            this.welcomeSubTitle = '乒乓球记分员';
            this.addTitle = '添加球员名称或球队名称';
            this.buttonPlay = '玩'; 
            this.buttonReadyToPlay = '准备玩';
            this.titleDashboard = '游戏板';
            this.selectPlayerOneLabel = '玩家 1';
            this.selectPlayerTwoLabel = '玩家 2';
            this.serveLabel = '服务';
            this.pointLabel = '点';
            this.confirmationHeader = '题';
            this.confirmationMessage = '您确定要删除所有赢得比赛的记录吗？';
            this.confirmationButtonOk = '是，我确定';
            this.confirmationButtonCancel = '不要这样';
            // tslint:disable-next-line: max-line-length
            this.confirmationPlayerMessage = '您确定要从列表中删除此播放器吗？请记住，您获胜游戏的记录将丢失。';
            this.playerLabel = '播放器';
            this.gameName = '乒乓';
            this.clickLabel = '单击播放器名称以进行更改';
            this.playLabel = '玩';
            this.stopLabel = '停止';
            this.tabGameLabel = '游戏';
            this.tabDashBoardLabel = '仪表板';
            this.tabServeLabel = '服务';
            this.tabPlayerLabel = '玩家们';
            this.tabAboutLabel = '关于';
            this.okLabel = '好';
            this.cancelLabel = '取消';
            this.confimationCancelMessage = '您确定要完成游戏吗？';
            this.btnResetGames = '重设游戏';
            this.confTitle = '组态';
            this.confQuestionOne = '谁服务？';
            this.confQuestionTwo = '服务量？';
            this.confTimes = '次';
            break;

    }

    this.setButtonSelected(language);

  }

  setButtonSelected(idButton){
    switch(idButton){
      case 'EN':
          this.buttonColorEN = 'white'; 
          this.buttonColorES = ''; 
          this.buttonColorPT = ''; 
          break;
      case 'ES':
          this.buttonColorEN = ''; 
          this.buttonColorES = 'white'; 
          this.buttonColorPT = ''; 
          break;
      case 'PT':
          this.buttonColorEN = ''; 
          this.buttonColorES = ''; 
          this.buttonColorPT = 'white'; 
          break;
    }
  }
  changeLanguage(lParam){
    this.loadLanguage(lParam);
  }

   addPlayer(){
    this.playerValue = this.playerValue.trim();
    if (this.playerValue.length > 0) {
      if (this.canAddPlayer(this.playerValue)) {

        this.playerValue = this.playerValue.substr(0,20);
        this.players.push({name :  this.playerValue,game:0,disabled:false,listOwner:''});
        this.playerValue = '';
        
        this.autoFocusValue = true;
      } else {
        this.setErrorMessage(1);
      }
    } else {
      this.setErrorMessage(2);
    }
  }

  onKeyPressLabel(){
    console.log('ENTRO');
    if(this.playerValue.length > 20){
      this.playerValue = this.playerValue.substr(0,20);
    }
    
  }

  canAddPlayer(playerName){
    let cont = 0;
    for ( let x=0; x<this.players.length ; x++) {
        if(this.players[x].name.toLowerCase() === playerName.toLowerCase()){
          cont++;
        }
    }
    if ( cont === 0 ) {
      return true;
    } else {
      return false;
    }
  }

  removePlayer(playerName){
    for ( let x=0; x<this.players.length ; x++) {
        if(this.players[x].name.toLowerCase() === playerName.toLowerCase()){
          this.players.splice(x, 1);
        }
    }
  }


  async showNotificationMessage(title,messageParam,buttonsname){
    const alert = await this.alertController.create({
      header: title,
      message: messageParam,
      buttons: [buttonsname]
    });
    await alert.present();
  }

  setErrorMessage(errorNum){

    let title = '';
    let message = '';
    let buttonName = '';

    switch(this.languageSelected){
      case 'EN':
          switch(errorNum) {
            case 1:
                title = 'Watch out!';
                message = 'The name entered already exists in the list of players or teams';
                buttonName = 'it\'s okay';
                break;
            case 2:
                title = 'Watch out!';
                message = 'You must enter a name in the text box';
                buttonName = 'it\'s okay';
                break;
            case 3:
                title = 'Watch out!';
                message = 'In order to play there must be two players entered';
                buttonName = 'it\'s okay';
                break;
            case 4:
                title = 'Watch out!';
                message = 'You must select two players to play';
                buttonName = 'it\'s okay';
                break;
            case 5:
                title = 'Information';
                message = 'Default values ​​of games won have been restored';
                buttonName = 'Okay';
                break;
          }
          break;
      case 'ES':
          switch(errorNum) {
            case 1:
                title = 'Cuidado!';
                message = 'El nombre ingresado ya existe en la lista de jugadores o equipos';
                buttonName = 'Está bien';
                break;
           case 2:
                title = 'Cuidado!';
                message = 'Debe ingresar un nombre en el cuadro de texto';
                buttonName = 'Está bien';
                break;
           case 3:
                title = 'Cuidado!';
                message = 'Para poder jugar deben de haber dos jugadores ingresados';
                buttonName = 'Está bien';
                break;
            case 4:
                title = 'Cuidado!';
                message = 'Debe de seleccionar dos jugadores para poder jugar';
                buttonName = 'Está bien';
                break;
            case 5:
                title = 'Información';
                message = 'Se han restablecidos los valores por defecto de los juegos ganados';
                buttonName = 'Bien';
                break;
          }
          break;
      case 'PT':
          switch(errorNum) {
            case 1:
                title = 'Cuidado!';
                message = 'O nome digitado já existe na lista de jogadores ou times';
                buttonName = 'Está bem';
                break;
            case 2:
                title = 'Cuidado!';
                message = 'Você deve inserir um nome na caixa de texto';
                buttonName = 'Está bem';
                break;
            case 3:
                title = 'Cuidado!';
                message = 'Para jogar, deve haver dois jogadores inscritos';
                buttonName = 'Está bem';
                break;
            case 4:
                title = 'Cuidado!';
                message = 'Você deve selecionar dois jogadores para jogar';
                buttonName = 'Está bem';
                break;
            case 5:
                title = 'Informação';
                message = 'Os valores padrão dos jogos vencidos foram restaurados';
                buttonName = 'Bem';
                break;
          }
          break;

          case '漢語':
          switch(errorNum) {
            case 1:
                title = '小心';
                message = '输入的名称已经存在于球员或球队列表中';
                buttonName = '没关系';
                break;
            case 2:
                title = '小心';
                message = '您必须在文本框中输入名称';
                buttonName = '没关系';
                break;
            case 3:
                title = '小心';
                message = '为了玩游戏，必须输入两名玩家';
                buttonName = '没关系';
                break;
            case 4:
                title = '小心';
                message = '您必须选择两个玩家才能玩';
                buttonName = '没关系';
                break;
            case 5:
                title = '信息';
                message = '所赢游戏的默认值已恢复';
                buttonName = '好的';
                break;
          }
          break;
    }

    this.showNotificationMessage(title,message,buttonName);

  }


  verifyReadyToPlay(){
    if(this.players.length >= 2){
      this.showWelcomePanel = false;
      this.showHomePanel = true;
      this.showDashBoardPanel = false;
      this.showPlayGamePanel = true;
      this. showServePanel = false;
      this.selectDefaultPlayers();
      this.stopGame();
      this.configuredByFirstTime = true;
    }else{
      this.setErrorMessage(3);
    }
  }


  onChange($event){
    let usingList = $event.target.id;
    let selectedPlayer = $event.target.value;

    console.log("usingList: "+usingList);
    console.log("selectedPlayer: "+selectedPlayer);

    console.log(this.players);
    console.log("--------------------------");

    for ( let x=0; x<this.players.length ; x++) {
      if(this.players[x].name.toLowerCase() === selectedPlayer.toLowerCase()){
        this.unSelectedPlayerOfAList(usingList);
        this.players[x].disabled = true;
        this.players[x].listOwner = usingList;

        if(usingList === 'cbxOne'){
          this.playerOneName = this.players[x].name;
        }else{
          this.playerTwoName = this.players[x].name;
        }
        break;
      }
  }
  
  }


  selectDefaultPlayers(){
    this.players[0].disabled = true;
    this.players[1].disabled = true;
    this.players[0].listOwner = "cbxOne";
    this.players[1].listOwner = "cbxTwo";
    this.playerOneName = this.players[0].name;
    this.playerTwoName = this.players[1].name;
  }


  unSelectedPlayerOfAList(listName){
    console.log(this.players);
    for ( let x=0; x<this.players.length ; x++) {
      if(this.players[x].disabled === true &&  this.players[x].listOwner === listName){
        this.players[x].disabled = false;
        this.players[x].listOwner = '';
      }
  }

  }

  addNewPlayer(){
    this.showWelcomePanel = true;
    this.showHomePanel = false;
  }

  resetGames(){
    for ( let x=0; x<this.players.length ; x++) {
      this.players[x].game = 0;
    }
    this.setErrorMessage(5);
  }

  managePointsPlayerOne(){
    this.counterPlayerOne ++;

    if(this.counterPlayerOne >= 11 && ((this.counterPlayerOne - this.counterPlayerTwo) >= this.serveAmount)){
      console.log("Se acabo one");
      this.presentWinModal(this.playerOneName,this.counterPlayerOne,this.playerTwoName,this.counterPlayerTwo);
      this.inscreasePointsToWinnerPlayer(this.playerOneName);
      this.resetCounters();
    }else{
      
      this.servingCounter++;
      if(this.servingCounter === this.serveAmount){
        this.changeWhoseServe();
        this.servingCounter = 0;
      }
    }

  }

  managePointsPlayerTwo(){
    this.counterPlayerTwo ++;

    if(this.counterPlayerTwo >= 11 && ((this.counterPlayerTwo - this.counterPlayerOne) >= this.serveAmount)){
      console.log("Se acabo two");
      this.presentWinModal(this.playerTwoName,this.counterPlayerTwo,this.playerOneName,this.counterPlayerOne);
      this.inscreasePointsToWinnerPlayer(this.playerTwoName);
      this.resetCounters();
    }else{
      this.servingCounter++;
      if(this.servingCounter === this.serveAmount){
        this.changeWhoseServe();
        this.servingCounter = 0;
      }
    }
 
  }

  changeWhoseServe(){
    if(this.servingPlayerOne){
      this.servingPlayerOne = false;
      this.servingPlayerTwo = true;
    }else{
      this.servingPlayerOne = true;
      this.servingPlayerTwo = false;
    }
  }



  changeWhoseServePlayerOneTwo(isPlayerOne){
    console.log('ENTRO'+isPlayerOne);
    if(isPlayerOne){
      console.log('1');
      this.servingPlayerOne = false;
      this.servingPlayerTwo = true;
    }else{
      console.log('2');
      this.servingPlayerOne = true;
      this.servingPlayerTwo = false;
    }
  }


  async presentWinModal(winnerNameParam,winnerPoints,loserNameParam,loserPoints) {
    const modal = await this.modalController.create({
      component: ModalWinPage,
      componentProps: {
        'winnerName': winnerNameParam,
        'winnerPoints': winnerPoints,
        'loserName': loserNameParam,
        'loserPoints': loserPoints,
        'language': this.languageSelected
      }
    });
    return await modal.present();
  }

  async presentInfoModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        'language': this.languageSelected
      }
    });
    return await modal.present();
  }

  infoApp(){
    this.presentInfoModal();
  }

  resetCounters(){
    this.counterPlayerOne = 0;
    this.counterPlayerTwo = 0;
    this.servingCounter = 0;
    this.wePlaying = false;
    this.stopPlaying = false;
    this.servingPlayerOne = true;
    this.servingPlayerTwo = false;
  }

  playGame(){

    if(this.playerTwoName != ''  && this.playerOneName != ''){
      this.wePlaying = true;
      this.stopPlaying = true;
    }else{
      this.setErrorMessage(4);
    }
  }

  stopGame(){
    this.wePlaying = false;
    this.stopPlaying = false;
    this.resetCounters();
  }


  async stopGameConfirmation() {
    const alert = await this.alertController.create({
      header: this.confirmationHeader,
      message: this.confimationCancelMessage,
      buttons: [
        {
          text: this.confirmationButtonOk,
          handler: () => {
            this.stopGame();
          }
        },
        {
          text: this.confirmationButtonCancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await alert.present();
  }





  inscreasePointsToWinnerPlayer(playerName){
    for ( let x=0; x<this.players.length ; x++) {
        if(this.players[x].name.toLowerCase() === playerName.toLowerCase()){
          this.players[x].game = this.players[x].game  + 1;
          break;
        }
    }
  }

 

  async removeGameScoreConfirmation() {
    const alert = await this.alertController.create({
      header: this.confirmationHeader,
      message: this.confirmationMessage,
      buttons: [
        {
          text: this.confirmationButtonOk,
          handler: () => {
            this.resetGames();
          }
        },
        {
          text: this.confirmationButtonCancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await alert.present();
  }

  
  async removePlayerConfirmation(playerName) {
    const alert = await this.alertController.create({
      header: this.confirmationHeader,
      message: this.confirmationPlayerMessage,
      buttons: [
        {
          text: this.confirmationButtonOk,
          handler: () => {
            
            this.removePlayer(playerName)
          }
        },
        {
          text: this.confirmationButtonCancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await alert.present();
  }

  showDashboard(){
    console.log('showDashboard()');
      if(this.players.length >= 2){
        this.showDashBoardPanel = true;
        this.showPlayGamePanel = false;
        this. showServePanel = false;
        this.showWelcomePanel = false;
        this.showHomePanel= true;
        this.autoFocusValue = true;
      }else{
        this.setErrorMessage(3);
      }
  
  }

  
  showPlayPanel(){
      console.log('showPlayPanel()');
      if(this.players.length >= 2){
        this.showDashBoardPanel = false;
        this. showServePanel = false;
        this.showPlayGamePanel = true;
        this.showWelcomePanel = false;
        this.showHomePanel= true;
        this.autoFocusValue = true;
      }else{
        this.setErrorMessage(3);
      }

  }

  showServeConfPanel(){
    console.log('showServeConfPanel()');
      if(this.players.length >= 2){     
        this.showDashBoardPanel = false;
        this. showServePanel = true;
        this.showPlayGamePanel = false;
        this.showWelcomePanel = false;
        this.showHomePanel= true;
        this.autoFocusValue = true;
      }else{
        this.setErrorMessage(3);
      }

  }


  changeServing(value){
    this.serveAmount = value;
  }




}
