(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),o=a.n(i),l=(a(68),a(69),a(23)),s=a(6),c=a(18),m=a(19),u=a(22),d=a(21),g=a(9),h=a.n(g),f=(a(27),a(33)),v=a(114),b=a(115),p=a(116),B=a(117),E=a(16),S=a.n(E),k=(a(29),a(30),a(31),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCellClick=function(e,t){if(n.state.startGameValue&&!1===n.state.win){n.state.undoStack.push(t);var a=n.state.board.slice();" "===a[Math.floor(t/3)][t%3]&&(a[Math.floor(t/3)][t%3]="X"),n.setState({board:a});var r=n.state.board.slice();n.check_win(r),console.log(n.state.win),!1===n.state.win&&S.a.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn",{params:{gameBeginner:n.state.gameBeginner,board:JSON.stringify(n.state.board),depth:JSON.stringify(n.state.depth)}}).then((function(e){var t=n.state.board.slice();if(t[e.data.r][e.data.c]="O",console.log(n.state.startGameButton),"Reset Game"===n.state.startGameButton){n.setState({board:t});var a=n.state.board.slice();n.check_win(a)}})).catch((function(e){console.log(e)}))}},n.handleStartHuman=function(e){console.log("Human begins the game!"),n.setState({gameBeginner:"HUMAN"})},n.handleStartAgent=function(e){console.log("Agent begins the game!"),n.setState({gameBeginner:"AGENT"})},n.handleStartGame=function(e,t){console.log("The game begins!"),"Start Game"===t?n.setState({startGameButton:"Reset Game",startGameValue:!0}):"Reset Game"===t&&n.setState({board:[[" "," "," "],[" "," "," "],[" "," "," "]],gameBeginner:" ",startGameValue:!1,whoPlaysFirstDialog:!1,startGameButton:"Start Game",win:!1,depth:" ",undoStack:[]}),"AGENT"===n.state.gameBeginner&&S.a.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn",{params:{gameBeginner:n.state.gameBeginner,board:JSON.stringify(n.state.board),depth:JSON.stringify(n.state.depth)}}).then((function(e){var t=n.state.board.slice();t[e.data.r][e.data.c]="O","Reset Game"===n.state.startGameButton&&n.setState({board:t})})).catch((function(e){console.log(e)}))},n.handleUndoFeature=function(e,t,a){var r=n.state.board.slice(),i=n.state.undoStack.slice(),o=i.length,l=o-(t+1);console.log(o),console.log(l);for(var s=0;s<=l;s++)r[Math.floor(i[i.length-1]/3)][i[i.length-1]%3]=" ",i.pop();n.setState({board:r,undoStack:i})},n.handleDepth=function(e,t){" "===n.state.depth&&n.setState({depth:t})},n.state={show_3x3_BoardComponent:n.props.show_3x3_BoardComponent,board:[[" "," "," "],[" "," "," "],[" "," "," "]],gameBeginner:" ",startGameValue:!1,whoPlaysFirstDialog:!1,startGameButton:"Start Game",symbol:{X:r.a.createElement("div",{style:{textAlign:"center"},className:h.a.centerDiv},r.a.createElement("i",{className:"fas fa-user-astronaut orange-text mr-2 "+h.a.iconThree})),O:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-robot orange-text mr-2 "+h.a.iconThree})),WA:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-robot light-green-text fa-spin mr-2 "+h.a.iconThree})),WH:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-user-astronaut light-green-text fa-spin mr-2 "+h.a.iconThree}))},win:!1,depth:" ",undoStack:[]},n}return Object(m.a)(a,[{key:"check_win",value:function(e){for(var t=0;t<3;t++)e[t][0]===e[t][1]&&e[t][0]===e[t][2]&&e[t][1]===e[t][2]&&" "!==e[t][0]&&("O"===e[t][0]?(e[t][0]="WA",e[t][1]="WA",e[t][2]="WA"):"X"===e[t][0]&&(e[t][0]="WH",e[t][1]="WH",e[t][2]="WH"),this.setState({win:!0}));for(var a=0;a<3;a++)e[0][a]===e[1][a]&&e[0][a]===e[2][a]&&e[1][a]===e[2][a]&&" "!==e[0][a]&&("O"===e[0][a]?(e[0][a]="WA",e[1][a]="WA",e[2][a]="WA"):"X"===e[0][a]&&(e[0][a]="WH",e[1][a]="WH",e[2][a]="WH"),this.setState({win:!0}));e[0][0]===e[1][1]&&e[0][0]===e[2][2]&&e[1][1]===e[2][2]&&" "!==e[0][0]&&("O"===e[0][0]?(e[0][0]="WA",e[1][1]="WA",e[2][2]="WA"):"X"===e[0][0]&&(e[0][0]="WH",e[1][1]="WH",e[2][2]="WH"),this.setState({win:!0})),e[0][2]===e[1][1]&&e[0][2]===e[2][0]&&e[1][1]===e[2][0]&&" "!==e[0][2]&&("O"===e[0][2]?(e[0][2]="WA",e[1][1]="WA",e[2][0]="WA"):"X"===e[0][2]&&(e[0][2]="WH",e[1][1]="WH",e[2][0]="WH"),this.setState({win:!0}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:"5%",margin:"0 auto",maxWidth:"90%"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:W},"RED NINJA TIC TAC TOE")),r.a.createElement(v.a,null,r.a.createElement(v.a,{fluid:"true"},this.state.board.map((function(t,a){return r.a.createElement(b.a,null,t.map((function(t,n){return r.a.createElement(p.a,{md:!0,className:h.a.cellThree,onClick:function(t){return e.handleCellClick(t,3*a+n)}},e.state.symbol[e.state.board[a][n]])})))})))),r.a.createElement(v.a,{fluid:"true"},this.state.undoStack.map((function(t,a){return r.a.createElement(B.a,{onClick:function(n){return e.handleUndoFeature(n,a,t)}},a+1)}))),r.a.createElement("div",{style:{}},r.a.createElement(B.a,{variant:"info",size:"lg",style:{startButton:O},onClick:function(t){return e.handleStartGame(t,e.state.startGameButton)}},this.state.startGameButton)," "),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleStartHuman(t)}},"Beginner_Human"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleStartAgent(t)}},"Beginner_Agent"),r.a.createElement(f.a,{"aria-label":"Basic example"},r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleDepth(t,1)}},"Depth 1"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleDepth(t,2)}},"Depth 2"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleDepth(t,3)}},"Depth 3"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleDepth(t,4)}},"Depth 4"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleDepth(t,-1)}},"Ultimate")))}}]),a}(n.Component)),W={display:"inline-block",textAlign:"center",width:"80%",lineHeight:1.5},O={},y=a(17),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCellClick=function(e,t,a,r,i){if(!0===n.state.startGameValue&&!1===n.state.ultimateWin){var o=n.state.bigboard.slice();if(" "===o[t][a][r][i])if(1!==n.state.moveNumber)if(!0===n.checkValidityOfMove(t,a)){o[t][a][r][i]="O",n.setState({bigboard:o});var l=n.state.bigboard.slice();n.checkPartialWin(l),!1===n.state.ultimateWin&&S.a.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate",{params:{board:JSON.stringify(n.state.bigboard),checkboard:JSON.stringify(n.state.ultimateWinBoard),previous_move:JSON.stringify([t,a,r,i])}}).then((function(e){console.log(e.data);var t=n.state.bigboard.slice();if(t[e.data["agent-move"][0]][e.data["agent-move"][1]][e.data["agent-move"][2]][e.data["agent-move"][3]]="X","Reset Game"===n.state.startGameButton){n.setState({bigboard:t,moveNumber:n.moveNumber+1,rowToPlace:e.data["agent-move"][2],columnToPlace:e.data["agent-move"][3]});var a=n.state.bigboard.slice();n.checkPartialWin(a)}})).catch((function(e){console.log(e)}))}else console.log("try again");else{var s=n.state.bigboard.slice();s[t][a][r][i]="O",n.setState({bigboard:s}),S.a.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate",{params:{board:JSON.stringify(n.state.bigboard),checkboard:JSON.stringify(n.state.ultimateWinBoard),previous_move:JSON.stringify([t,a,r,i])}}).then((function(e){console.log(e.data);var t=n.state.bigboard.slice();if(t[e.data["agent-move"][0]][e.data["agent-move"][1]][e.data["agent-move"][2]][e.data["agent-move"][3]]="X","Reset Game"===n.state.startGameButton){n.setState({bigboard:t,moveNumber:n.moveNumber+1,rowToPlace:e.data["agent-move"][2],columnToPlace:e.data["agent-move"][3]});var a=n.state.bigboard.slice();n.checkPartialWin(a)}})).catch((function(e){console.log(e)}))}}},n.handleStartGame=function(e,t){if(console.log(t),"Start Game"===t)n.setState({startGameButton:"Reset Game",startGameValue:!0});else if("Reset Game"===t){for(var a,r=n.state.bigboard,i=0;i<3;i++)for(var o=0;o<3;o++)for(var l=0;l<3;l++)for(var s=0;s<3;s++)r[i][o][l][s]=" ";n.setState((a={bigboard:r,gameBeginner:" ",startGameValue:!1,startGameButton:"Start Game"},Object(y.a)(a,"startGameValue",!1),Object(y.a)(a,"ultimateWin",!1),Object(y.a)(a,"rowToPlace"," "),Object(y.a)(a,"columnToPlace"," "),Object(y.a)(a,"moveNumber",1),Object(y.a)(a,"ultimateWinBoard",[[" "," "," "],[" "," "," "],[" "," "," "]]),a))}"AGENT"===n.state.gameBeginner&&(console.log("Agent beginner"),S.a.get("https://redninjas-tic-tac-toe.herokuapp.com/agent-turn-ultimate",{params:{board:JSON.stringify(n.state.bigboard),checkboard:JSON.stringify(n.state.ultimateWinBoard),previous_move:JSON.stringify([-1,-1,-1,-1])}}).then((function(e){var t=n.state.bigboard.slice();if(t[e.data["agent-move"][0]][e.data["agent-move"][1]][e.data["agent-move"][2]][e.data["agent-move"][3]]="X","Reset Game"===n.state.startGameButton){n.setState({bigboard:t,rowToPlace:e.data["agent-move"][2],columnToPlace:e.data["agent-move"][3],moveNumber:n.moveNumber+1});var a=n.state.bigboard.slice();n.checkPartialWin(a)}})).catch((function(e){console.log(e)})))},n.handleStartHuman=function(e){console.log("Human begins the game!"),n.setState({gameBeginner:"HUMAN"})},n.handleStartAgent=function(e){console.log("Agent begins the game!"),n.setState({gameBeginner:"AGENT"})},n.state={show_9x9_BoardComponent:n.props.show_9x9_BoardComponent,startGameButton:"Start Game",startGameValue:!1,ultimateWin:!1,gameBeginner:" ",rowToPlace:" ",columnToPlace:" ",moveNumber:1,ultimateWinBoard:[[" "," "," "],[" "," "," "],[" "," "," "]],bigboard:[[[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]]],[[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]]],[[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]],[[" "," "," "],[" "," "," "],[" "," "," "]]]],symbol:{X:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-grin amber-text mr-2 "+h.a.iconNine})),O:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"far fa-grin pink-text mr-2 "+h.a.iconNine})),WA:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-laugh-wink amber-text mr-2 "+h.a.iconNine})),WH:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"far fa-laugh-wink pink-text mr-2 "+h.a.iconNine})),LA:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"fas fa-sad-cry amber-text mr-2 "+h.a.iconNine})),LH:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("i",{className:"far fa-sad-cry pink-text mr-2 "+h.a.iconNine}))}},n}return Object(m.a)(a,[{key:"alterBigBoardRow",value:function(e,t,a,n,r){for(var i=this.state.bigboard.slice(),o=0;o<3;o++)for(var l=0;l<3;l++)for(var s=0;s<3;s++)for(var c=0;c<3;c++)o===r||i[o][l][s][c]===e?i[o][l][s][c]=t:i[o][l][s][c]===a&&(i[o][l][s][c]=n);this.setState({bigboard:i})}},{key:"alterBigBoardColumn",value:function(e,t,a,n,r){for(var i=this.state.bigboard.slice(),o=0;o<3;o++)for(var l=0;l<3;l++)for(var s=0;s<3;s++)for(var c=0;c<3;c++)l===r||i[o][l][s][c]===e?i[o][l][s][c]=t:i[o][l][s][c]===a&&(i[o][l][s][c]=n);this.setState({bigboard:i})}},{key:"alterBigBoardLeftDiagonal",value:function(e,t,a,n){for(var r=this.state.bigboard.slice(),i=0;i<3;i++)for(var o=0;o<3;o++)for(var l=0;l<3;l++)for(var s=0;s<3;s++)0===i&&0===o||1===i&&1===o||2===i&&2===o||r[i][o][l][s]===e?r[i][o][l][s]=t:r[i][o][l][s]===a&&(r[i][o][l][s]=n);this.setState({bigboard:r})}},{key:"alterBigBoardRightDiagonal",value:function(e,t,a,n){for(var r=this.state.bigboard.slice(),i=0;i<3;i++)for(var o=0;o<3;o++)for(var l=0;l<3;l++)for(var s=0;s<3;s++)0===i&&2===o||1===i&&1===o||2===i&&0===o||r[i][o][l][s]===e?r[i][o][l][s]=t:r[i][o][l][s]===a&&(r[i][o][l][s]=n);this.setState({bigboard:r})}},{key:"check_ultimate_win",value:function(e){for(var t=0;t<3;t++)e[t][0]===e[t][1]&&e[t][0]===e[t][2]&&e[t][1]===e[t][2]&&" "!==e[t][0]&&("O"===e[t][0]?this.alterBigBoardRow("O","WH","X","LA",t):"X"===e[t][0]&&this.alterBigBoardRow("X","WA","O","LH",t),this.setState({ultimateWin:!0,ultimateWinBoard:e}));for(var a=0;a<3;a++)e[0][a]===e[1][a]&&e[0][a]===e[2][a]&&e[1][a]===e[2][a]&&" "!==e[0][a]&&("O"===e[0][a]?this.alterBigBoardColumn("O","WH","X","LA",a):"X"===e[0][a]&&this.alterBigBoardColumn("X","WA","O","LH",a),this.setState({ultimateWin:!0,ultimateWinBoard:e}));e[0][0]===e[1][1]&&e[0][0]===e[2][2]&&e[1][1]===e[2][2]&&" "!==e[0][0]&&("O"===e[0][0]?this.alterBigBoardLeftDiagonal("O","WH","X","LA"):"X"===e[0][0]&&this.alterBigBoardLeftDiagonal("X","WA","O","LH"),this.setState({ultimateWin:!0,ultimateWinBoard:e})),e[0][2]===e[1][1]&&e[0][2]===e[2][0]&&e[1][1]===e[2][0]&&" "!==e[0][2]&&("O"===e[0][2]?this.alterBigBoardLeftDiagonal("O","WH","X","LA"):"X"===e[0][2]&&this.alterBigBoardRightDiagonal("X","WA","O","LH"),this.setState({ultimateWin:!0,ultimateWinBoard:e}))}},{key:"place_partial",value:function(e,t,a,n){for(var r=0;r<3;r++)for(var i=0;i<3;i++)e[t][a][r][i]=n;var o=this.state.ultimateWinBoard.slice();o[t][a]=n,this.setState({bigboard:e,ultimateWinBoard:o});var l=this.state.ultimateWinBoard.slice();this.check_ultimate_win(l)}},{key:"checkPartialWin",value:function(e){for(var t=0;t<3;t++)for(var a=0;a<3;a++)for(var n=0;n<3;n++)e[t][a][n][0]===e[t][a][n][1]&&e[t][a][n][1]===e[t][a][n][2]&&e[t][a][n][0]===e[t][a][n][2]&&" "!==e[t][a][n][0]&&("O"===e[t][a][n][0]?this.place_partial(e,t,a,"O"):"X"===e[t][a][n][0]&&this.place_partial(e,t,a,"X"));for(var r=0;r<3;r++)for(var i=0;i<3;i++)for(var o=0;o<3;o++)e[r][i][0][o]===e[r][i][1][o]&&e[r][i][0][o]===e[r][i][2][o]&&e[r][i][1][o]===e[r][i][2][o]&&" "!==e[r][i][0][o]&&("O"===e[r][i][0][o]?this.place_partial(e,r,i,"O"):"X"===e[r][i][0][o]&&this.place_partial(e,r,i,"X"));for(var l=0;l<3;l++)for(var s=0;s<3;s++)e[l][s][0][0]===e[l][s][1][1]&&e[l][s][0][0]===e[l][s][2][2]&&e[l][s][1][1]===e[l][s][2][2]&&" "!==e[l][s][0][0]&&("O"===e[l][s][0][0]?this.place_partial(e,l,s,"O"):"X"===e[l][s][0][0]&&this.place_partial(e,l,s,"X"));for(var c=0;c<3;c++)for(var m=0;m<3;m++)e[c][m][0][2]===e[c][m][1][1]&&e[c][m][0][2]===e[c][m][2][0]&&e[c][m][1][1]===e[c][m][2][0]&&" "!==e[c][m][0][2]&&("O"===e[c][m][0][2]?this.place_partial(e,c,m,"O"):"X"===e[c][m][0][2]&&this.place_partial(e,c,m,"X"))}},{key:"checkValidityOfMove",value:function(e,t){return" "!==this.state.ultimateWinBoard[this.state.rowToPlace][this.state.columnToPlace]||e===this.state.rowToPlace&&(t===this.state.columnToPlace&&(e===this.state.rowToPlace&&t===this.state.columnToPlace||void 0))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:"2%",margin:"0 auto",maxWidth:"90%"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:_},"RED NINJA TIC TAC TOE")),r.a.createElement(v.a,null,r.a.createElement(v.a,{fluid:"true"},this.state.bigboard.map((function(t,a){return r.a.createElement(b.a,null,t.map((function(t,n){return r.a.createElement(p.a,{md:!0,style:N},e.state.bigboard.map((function(t,i){return r.a.createElement(b.a,{style:{maxWidth:"100%",margin:"0 auto"}},t.map((function(t,o){return r.a.createElement(p.a,{md:!0,className:h.a.cellNine,style:w,onClick:function(t){return e.handleCellClick(t,a,n,i,o)}},r.a.createElement("div",{style:{textAlign:"center"}},e.state.symbol[e.state.bigboard[a][n][i][o]]))})))})))})))})))),r.a.createElement("div",{style:{}},r.a.createElement(B.a,{variant:"info",size:"lg",style:{},onClick:function(t){return e.handleStartGame(t,e.state.startGameButton)}},this.state.startGameButton)," "),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleStartHuman(t)}},"Beginner_Human"),r.a.createElement(B.a,{variant:"default",onClick:function(t){return e.handleStartAgent(t)}},"Beginner_Agent"))}}]),a}(n.Component),N={backgroundColor:"black",textAlign:"center",border:"1px solid",width:"10%",padding:"3%",flexBasis:0,flexGrow:1,minWidth:0,maxWidth:"90%"},w={backgroundColor:"black",textAlign:"center",border:"1px solid",width:"5%",height:60,padding:"1%",flexBasis:0,flexGrow:1,minWidth:0,maxWidth:"90%"},_={display:"inline-block",textAlign:"center",width:"80%",lineHeight:1.5},x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={show_3x3_BoardComponent:!1,show_9x9_BoardComponent:!1,showGameStarterComponent:!0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{}},r.a.createElement(B.a,{variant:"info",size:"lg",onClick:function(){e.setState({show_3x3_BoardComponent:!0,showGameStarterComponent:!1})}}," 3*3 TIC-TAC-TOE"),r.a.createElement(B.a,{variant:"info",size:"lg",onClick:function(){e.setState({show_9x9_BoardComponent:!0,showGameStarterComponent:!1})}}," 9*9 TIC-TAC-TOE"),this.state.show_3x3_BoardComponent&&r.a.createElement(k,null),this.state.show_9x9_BoardComponent&&r.a.createElement(A,null))}}]),a}(n.Component);a(109);var C=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(110)},68:function(e,t,a){},69:function(e,t,a){},9:function(e,t,a){e.exports={cellThree:"board_cellThree__2VNql",cellNine:"board_cellNine__2pxQO",iconThree:"board_iconThree__3sNB-",iconNine:"board_iconNine__jY-A-"}}},[[63,1,2]]]);
//# sourceMappingURL=main.dd77392e.chunk.js.map