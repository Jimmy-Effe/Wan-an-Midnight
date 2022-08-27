new Vue({
  el: '#app',
  data: {
    isGameStarted: false,
    isGameEnded: false,
    computerHtml: '<i class="far fa-hand-paper"></i>',
    userPicked: 0,
    computerPicked: 0,
    whoWin: '',
    userWins: 0,
    computerWins: 0,
    result: '',
    rounds: 0,
    records: [],
    resultCssClass: '',
  },
  methods: {
    restart: function () {
      this.isGameStarted = false;
      this.isGameEnded = false;
      this.computerHtml = '<i class="far fa-hand-paper"></i>';
      this.userPicked = 0;
      this.computerPicked = 0;
      this.whoWin = '';
      this.userWins = 0;
      this.computerWins = 0;
      this.result = '';
      this.rounds = 0;
      this.records = [];
      this.resultCssClass = '';
    },
    didPicked: function (picked) {
      console.log(picked);
      
      this.userPicked = picked;
      
      let random_from_1_to_3 = Math.floor(Math.random() * 3) + 1;
      this.computerPicked = random_from_1_to_3;
      
      let symbolHtml = {
        '1': 'paper',
        '2': 'peace',
        '3': 'rock'
      };
      
      this.computerHtml = `<i class="far fa-hand-${symbolHtml[random_from_1_to_3]}"></i>`;
      
      // Logic
      if( this.userPicked == this.computerPicked ) {
        this.whoWin = 'draw';
      }else{
        
        switch( this.userPicked ) {
            
          case 1:
            
            if( this.computerPicked == 2 ) {
              this.whoWin = 'computer';
            }else{
              this.whoWin = 'user';
            }
            
            break;
          
          case 2:
            
            if( this.computerPicked == 3 ) {
              this.whoWin = 'computer';
            }else{
              this.whoWin = 'user';
            }
            
            break;
            
          case 3:
            
            if( this.computerPicked == 1 ) {
              this.whoWin = 'computer';
            }else{
              this.whoWin = 'user';
            }
            
            break;
            
          default:
        } 
      } // If
            
      console.log('Who Wins: ' + this.whoWin);
      this.rounds++;
    }
  },
  watch: {
    rounds: function () {
      
      if( this.whoWin == 'user' ) {
        
        this.records.unshift({
          message: '这一局您赢了！',
          type: 'win'
        });
        
        this.userWins++;
      }else if( this.whoWin == 'computer' ) {
        
        this.records.unshift({
          message: '这一句电脑赢了！',
          type: 'lose'
        });
        
        this.computerWins++;
      }else if( this.whoWin == 'draw' ) {
        this.records.unshift({
          message: '和局，再试一次！',
          type: 'draw'
        });
      }
      
      if( this.userWins >= 2 ) {
        
        this.result = '您胜出！';
        this.isGameEnded = true;
      }else if( this.computerWins >= 2 ) {
        
        this.result = '电脑胜出！';
        this.isGameEnded = true;
      }
      
    }
  }
});