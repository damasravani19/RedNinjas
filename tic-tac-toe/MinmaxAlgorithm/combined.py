import math
import numpy as np
import random

#Implementation of Two Player Tic-Tac-Toe game in Python.

#ASSUME AGENT IS MAXIMIZER AND 
''' We will make the board using dictionary 
    in which keys will be the location(i.e : top-left,mid-right,etc.)
    and initialliy it's values will be empty space and then after every move 
    we will change the value according to player's choice of move. '''

global BigTree 
theBoard = np.zeros((3,3),dtype=str)

board_keys = []
HUMAN = 'X'
AGENT = 'O'
EMPTY = ' '
MAX_UTIL = 10

empty_cells = [[]];

def set_up_board():
    global BigTree 
    BigTree=list()
    for i in range(0,9):
        BigTree.append([])

    for i in range(0,3):
        for j in range(0,3):
            theBoard[i][j]=EMPTY

''' We will have to print the updated board after every move in the game and 
    thus we will make a function in which we'll define the printBoard function
    so that we can easily print the board everytime by calling this function. '''

def printBoard(board):
    print(board[0][0] + '|' + board[0][1] + '|' + board[0][2])
    print('-+-+-')
    print(board[1][0] + '|' + board[1][1] + '|' + board[1][2])
    print('-+-+-')
    print(board[2][0] + '|' + board[2][1] + '|' + board[2][2])

def print_game_over(turn):
    printBoard(theBoard)
    print("\nGame Over.\n")                
    print(" **** " +turn + " won. ****")  



def is_moves_left(board):
    empty_cells = [[]]
    flag = 0
    for i in range(0,3):
        for j in  range(0,3):
            if board[i][j]==EMPTY:
                flag = 1
                empty_cells.append(i,j);
                # return True
    
    if flag == 1:
        return True
    return False

def calc_score(b): 

    for r in range(0,3):
        if b[r][0] == b[r][1] == b[r][2] != EMPTY:
            if b[r][0] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

    for c in range(0,3):
        if b[0][c] == b[1][c] == b[2][c] != EMPTY :
            if b[0][c] == AGENT:
                return MAX_UTIL
            else:
                return -MAX_UTIL

    if b[0][0]==b[1][1]==b[2][2] != EMPTY :
        if b[0][0] == AGENT:
            return MAX_UTIL
        else:
            return -MAX_UTIL

    if b[0][2]==b[1][1]==b[2][0] != EMPTY :
        if b[0][2] == AGENT:
            return MAX_UTIL
        else:
            return -MAX_UTIL

    return 0


    #Utility Function based on number of remaining squares 
    # no_of_emptySquares = 0 
    # for i in range(0,3):
    #     for j in range(0,3):
            
    #         if(b[i][j]==EMPTY):
    #             no_of_emptySquares=no_of_emptySquares+1 
                 

    # for r in range(0,3):
    #     if b[r][0] == b[r][1] == b[r][2] != EMPTY:
    #         if b[r][0] == AGENT:
    #             return 1 * (no_of_emptySquares ) + 1
    #         else:
    #             return -1 * (no_of_emptySquares) +1 

    # for c in range(0,3):
    #     if b[0][c] == b[1][c] == b[2][c] != EMPTY :
    #         if b[r][0] == AGENT:
    #             return 1 * (no_of_emptySquares ) + 1
    #         else:
    #             return -1 * (no_of_emptySquares) +1 
            

    # if b[0][0]==b[1][1]==b[2][2] != EMPTY :
    #     if b[r][0] == AGENT:
    #             return 1 * (no_of_emptySquares ) + 1
    #     else:
    #         return -1 * (no_of_emptySquares) +1 

    # if b[0][2]==b[1][1]==b[2][0] != EMPTY :
    #     if b[r][0] == AGENT:
    #             return 1 * (no_of_emptySquares ) + 1
    #     else:
    #             return -1 * (no_of_emptySquares) +1 

    # return 0


def minimax(board,depth,is_max):
    
    score = calc_score(board)
    dup_board = board.copy()
    if score == MAX_UTIL:
        return score

    if score == -MAX_UTIL:
        return score

    if is_moves_left(board)==False :
        return 0

    if is_max :

        best_val = -math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = AGENT
                    current_board_value = minimax(board,depth+1,not(is_max))
                    if current_board_value > best_val :
                        best_val= current_board_value
                        row_value=i 
                        coloumn_value=j 
                    board[i][j]=EMPTY

        BigTree[depth].append([dup_board,row_value,coloumn_value,best_val])
        return best_val

    else:

        best_val = math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = HUMAN
                    current_board_value = minimax(board,depth+1,not(is_max))
                    if current_board_value < best_val :
                        best_val= current_board_value
                        row_value=i 
                        coloumn_value=j
                    board[i][j]=EMPTY

        BigTree[depth].append([dup_board,row_value,coloumn_value,best_val])
        return best_val


# tree of depth is made as a black box
def minimax_for_depths(board,depth,temp_depth,is_max): #temp_depth is 0 in the starting
    # dup_board = board.copy()


    if temp_depth == depth:
        if depth == 1:
            #make a function call to choose the best move for that depth

        elif depth == 2:

        elif depth == 3:
        
        elif depth == 4:


    if score == MAX_UTIL:
        return score

    if score == -MAX_UTIL:
        return score

    if is_moves_left(board)==False :
        return 0

    if is_max :

        best_val = -math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = AGENT
                    current_board_value = minimax(board,depth,depth+1,not(is_max))
                    if current_board_value > best_val :
                        best_val= current_board_value
                        row_value=i 
                        coloumn_value=j 
                    board[i][j]=EMPTY

        # BigTree[depth].append([dup_board,row_value,coloumn_value,best_val])
        return best_val

    else:

        best_val = math.inf

        for i in range(0,3):
            for j in range(0,3):
                if(board[i][j]==EMPTY):
                    board[i][j] = HUMAN
                    current_board_value = minimax(board,depth,depth+1,not(is_max))
                    if current_board_value < best_val :
                        best_val= current_board_value
                        row_value=i 
                        coloumn_value=j
                    board[i][j]=EMPTY

        # BigTree[depth].append([dup_board,row_value,coloumn_value,best_val])
        return best_val


def is_depth_1(board,depth,is_max): # randomizing
    random.choice(empty_cells)



def is_depth_2(board,depth): 





def is_depth_3(board,depth): # Only Agents win

    for r in range(0,3):
        if board[r][0] == board[r][1] == AGENT and board[r][2] == EMPTY:
            board[r][2] = AGENT
            return r,2
        elif board[r][1] == board[r][2] == AGENT and board[r][0] == EMPTY:
            board[r][0] = AGENT
            return r,0
        elif board[r][0] == board[r][2] == AGENT and board[r][1] == EMPTY:
            board[r][1] = AGENT
            return r,1

    for c in range(0,3):
        if board[0][c] == board[1][c] == AGENT and board[2][c] == EMPTY:
            board[2][c] = AGENT
            return 2,c
        elif board[1][c] == board[2][c] == AGENT and board[0][c] == EMPTY:
            board[0][c] = AGENT
            return 0,c
        elif board[0][c] == board[2][c] == AGENT and board[1][c] == EMPTY:
            board[1][c] = AGENT
            return 1,c


# diagonal check

    # if board[0][0] == board[1][1] == AGENT && board[2][2] == EMPTY:
    #     board[2][2] = AGENT
    #     retun 2,2
    # elif board[0][0] == board[2][2] && board[1][1] == EMPTY:
    #     board[1][1] = AGENT
    #     retun 1,1
    # elif board[1][1] == board[2][2] && board[0][0] == EMPTY:
    #     board[0][0] = AGENT
    #     retun 0,0

    # if board[0][0] == board[1][1] == AGENT && board[2][2] == EMPTY:
    #     board[2][2] = AGENT
    #     retun 2,2
    # elif board[0][0] == board[2][2] && board[1][1] == EMPTY:
    #     board[1][1] = AGENT
    #     retun 1,1
    # elif board[1][1] == board[2][2] && board[0][0] == EMPTY:
    #     board[0][0] = AGENT
    #     retun 0,0

    # return (any empty cell)


    


def is_depth_4(board,depth): # My win Your Loss
    if depth == 0:
        return
    




def choose_optimal_move(board):
    
    optimal_val = -math.inf

    # From no.of empty squares we can find the value of depth 
    depth=9 

    for i in range(0,3):
        for j in range(0,3):
            
            if(board[i][j]==EMPTY):
                depth=depth-1 

    current_States= BigTree[depth]

    for i in range(len(current_States)):

        comparison = current_States[i][0] == board
        equal_arrays = comparison.all()
        if equal_arrays:
            best_val_row = current_States[i][1]
            best_val_col = current_States[i][2]


    return best_val_row, best_val_col
            
def human_turn(board):
    
    printBoard(theBoard)
    print("It's your turn," + HUMAN + ".Move to which place?")
            
    while(True):
        move = int(input())
        row = int(move/3)
        col = int(move%3)

        if theBoard[row][col] == EMPTY:
            theBoard[row][col] = HUMAN
            break
        else:
            print("That place is already filled.\nMove to which place?")
            continue

def agent_turn(board):
    printBoard(theBoard)
    print(AGENT + " is moving please wait ...")
    
    r,c = choose_optimal_move(board)
    theBoard[r][c] = AGENT

# Now we'll write the main function which has all the gameplay functionality.
def game():

    set_up_board()
    turn = AGENT
    count = 0
    '''Considering agent always as a maximiser
        if HUMAN should play first ; turn=HUMAN , is_max=False
        if AGENT should play first ; turn=AGENT , is_max=True '''
    is_max=True  
    # Calling the minmax function for the entire tree
    minimax(theBoard,0,is_max) 

    while(True):
        
        if(turn==HUMAN):
            human_turn(theBoard)
            count+=1
        else:
            agent_turn(theBoard)
            count+=1
        
        did_win = False
        # Now we will check if player X or O has won,for every move after 5 moves. 
        if count >= 5:
            
            for i in range (0,3):
                if(theBoard[i][0]==theBoard[i][1]==theBoard[i][2]!=EMPTY):
                    print_game_over(turn)
                    did_win=True         
                    break
            
            for j in range(0,3):
                if(theBoard[0][j]==theBoard[1][j]==theBoard[2][j]!=EMPTY):
                    print_game_over(turn)
                    did_win=True         
                    break
            
            if theBoard[0][0] == theBoard[1][1] == theBoard[2][2] != EMPTY: # diagonal
                print_game_over(turn)
                did_win=True         
                break
            if theBoard[0][1] == theBoard[1][1] == theBoard[2][0] != EMPTY: # diagonal
                print_game_over(turn)
                did_win=True         
                break 

        if did_win :
            break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")                
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn ==HUMAN:
            turn = AGENT
        else:
            turn = HUMAN        
    
    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":  
        game()

if __name__ == "__main__":
    game()