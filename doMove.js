function doMove(matrix1 , i1 , j1 , step , point1 ) { // 1 == right | 2 == left | 3 == up | 4 ==d down

    let arr ={
        matrix : matrix1 ,
        i : i1 , 
        j: j1 ,
        points : point1 , 
        succeed : true 
    }
if(step === "1")
{    
    if(!matrix1[i1][j1+1])
        {
           arr['j']= j1+1;
           console.log("Empty ! ")
            return arr;
        }
    {
        if(matrix1[i1][j1+1].damage === '-10')

            if(point1 - 10 <= 0 ) // losing
            {
                arr.succeed=false;
                return arr;
            }
            else {
                
                arr['j']=j1+1;
                console.log("Sorry ! you lose 10 points !  ")
                arr.points-=10;
                return arr;
            }

        }
        if(matrix1[i1][j1+1].damage === '-20')

        if(point1 - 20 <= 0 ) // losing
        {
            arr.succeed=false;
            return arr;
        }
        else {
            console.log("Sorry ! you lose 20 points !  ")
            arr['j']=j1+1;
            arr.points-=10;
            return arr;
        }
        if(matrix1[i1][j1+1].damage === '10')
        {
            arr['j']=j1+1;
            console.log("Yeesss ! you earn 10 points !  ")
            arr.points+=10;
            return arr;
        }
        if(matrix1[i1][j1+1].damage === '20')
        {
            console.log("Yeesss ! you earn 20 points !  ")
            arr['j']=j1+1;
            arr.points+=20;
            return arr;
        }
}
if(step ===  '2')
{   
    if(!matrix1[i1][j1-1])
        {
            arr['j']=j1 -1;
            return arr;
        }
        if(matrix1[i1][j1-1].damage === '-10')

            if(point1 - 10 <= 0 ) // losing
            {
                arr.succeed=false;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 10 points !  ")
                arr.j--;
                arr.points-=10;
                return arr;
            }

        
        if(matrix1[i1][j1-1].damage ===' -20')
        {
        if(point1 - 20 <= 0 ) // losing
        {
            arr.succeed=false;;
            return arr;
        }
        else {
            console.log("Sorry ! you lose 20 points !  ")
            arr['j']=j1 -1;
            arr.points-=10;
            return arr;
        }
    }
        if(matrix1[i1][j1-1].damage === '10')
        {
            console.log("Yeesss ! you earn 10 points !  ")
            arr['j']=j1 -1;
            arr.points+=10;
            return arr;
        }
        if(matrix1[i1][j1-1].damage === '20' )
        {
            console.log("Yeesss ! you earn 20 points !  ")
            arr['j']=j1 -1;
            matrix1[i1][j1+1] = undefined;
            arr.points+=20;
            return arr;
        }
    }
    if(step ===  '3')
    {   
       
        if(!matrix1[i1-1][j1])
        {
            arr['i']=i1 -1;
            return arr;
        }
        {
            if(matrix1[i1-1][j1].damage === '-10')
    
                if(point1 - 10 <= 0 ) // losing
                {
                    arr.succeed=false;
                    return arr;
                }
                else {
                    console.log("Sorry ! you lose 10 points !  ")
                    arr['i']=i1 -1;
                    arr.points-=10;
                    return arr;
                }
            }
            if(matrix1[i1-1][j1].damage === '-20')
    
            if(point1 - 20 <= 0 ) // losing
            {
                arr.succeed=false;;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 20 points !  ")
                arr['i']=i1 -1;
                arr.points-=20;
                return arr;
            }
            if(matrix1[i1-1][j1].damage === '10')
            {
                console.log("Yeesss ! you earn 10 points !  ")
                arr['i']=i1 - 1;
                arr.points+=10;
                return arr;
            }
            if(matrix1[i1-1][j1].damage === '20')
            {
                console.log("Yeesss ! you earn 20 points !  ")
                arr['i']=i1 -1;
                arr.points+=20;
                return arr;
            }
    }
        if(step === '4' )
        {   
           
        if(!matrix1[i1+1][j1])
        {
            arr['i']=i1 +1;
            return arr;
        }
        {
            if(matrix1[i1+1][j1].damage === '-10')
    
                if(point1 - 10 <= 0 ) // losing
                {
                    arr.succeed=false;
                    return arr;
                }
                else {
                    console.log("Sorry ! you lose 10 points !  ")
                    arr['i']=i1 +1;
                    arr.points-=10;
                    return arr;
                }
    
            }
            if(matrix1[i1+1][j1].damage === '-20')
    
            if(point1 - 20 <= 0 ) // losing
            {
                arr.succeed=false;;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 20 points !  ")
                arr['i']=i1 +1;
                arr.points-=20;
                return arr;
            }
            if(matrix1[i1+1][j1].damage === '10')
            {
                console.log("Yeesss ! you earn 10 points !  ")
                arr['i']=i1 +1;
                arr.points+=10;
                return arr;
            }
            if(matrix1[i1+1][j1].damage === '20')
            {
                console.log("Yeesss ! you earn 20 points !  ")
                arr['i']=i1 +1;
                arr.points+=20;
                return arr;
            }

        }
return arr;
}

module.exports = doMove;