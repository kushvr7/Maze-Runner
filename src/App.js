import React , {useState} from 'react';
import './App.css';
import Inp from './InputFile/Input'; 
import Hee from './Head/Header'; 
import Radium from 'radium';

function App() {
 
const [row , setrow] = useState({
  len : 0,
});

const [grid , setgrid] = useState({
  mat: [],
});

const [stt , setstt] = useState({
  sty: [],
});


const [clo , setclo] = useState({
  bgclo: "black",
});

const[vis,setvis] = useState({
 vi:[]  
})

// setclo({
//    for
// });

const [dec , setdec] = useState({
      obs:0,
      start:0,
      end:0
});
//==========================================



//====================================================================
          //  SETTER METHOD

     const setterO = () =>{
       setdec({
         obs : 1,
         start:0,
         end:0
       });

     }     

     const setterS = () =>{
      setdec({
        obs : 0,
        start:1,
        end:0
      });
 
    }     


    const setterE = () =>{
      setdec({
        obs : 0,
        start:0,
        end:1
      });

    }     


//=====================================================================
// console.log(dec.obs);

   const s =[];
   const v=[];
//=====================================================================
const myarr =[];

  const getp = (val) => {

    let len = val;
    
      setrow({
        len : val,
      });

      // for(let r = 0;r<row.len;r++)
      // {
      //   let rt = [];
      //   s.push(rt);
      // } 

      for(let i=0; i < len; i++){
        let rt=[];
        for(let j=0; j < len; j++){
        rt.push("black");
        }
        s.push(rt);
      }
   
       for(let i=0; i < len; i++){
    let rt=[];
    for(let j=0; j < len; j++){
    rt.push(0);
    }
    v.push(rt);
  }


    for(let i=0; i < len; i++){
      let row = [];
      myarr.push(row);
    }
  
    for(let i=0; i < len; i++){
      for(let j=0; j < len; j++)
      myarr[i].push(0);
    }

    setgrid({
      mat : myarr,
    });

   setvis({
      vi:v
   });
   

setstt({
 sty : s,
});

// console.log(s);
  
  }

  // console.log(stt.sty[0][1]);
  //==========================================
  // const vis = [];
  
  // for(let i=0; i < row.len; i++){
  //   let rt=[];
  //   for(let j=0; j < row.len; j++){
  //   rt.push(0);
  //   }
  //   vis.push(rt);
  // }

//=============================================

  const set = (u , v ) => {
    //  console.log( "x co- "+ u +"  y co -  "+ v);
// const matt = [];
  // console.log();
    if(dec.obs == 1 && dec.start == 0 && dec.end == 0)
    {

      for(let i=0;i<row.len;i++)
      {
        for(let j=0;j<row.len;j++)
          {
            if(u == i && v == j)
             {
               grid.mat[i][j] = 2;
                stt.sty[i][j] = '#b31929';
                let sr = stt.sty;
              setstt({
                sty : sr,
              })  
                console.table(stt.sty);
             }
          }
      }

    }


//=================================
       //   set  end 
   
       
    if(dec.obs == 0 && dec.start == 0 && dec.end == 1)
    {

      for(let i=0;i<row.len;i++)
      {
        for(let j=0;j<row.len;j++)
          {
            if(u == i && v == j)
             {
               grid.mat[i][j] = 3;
               stt.sty[i][j] = '#257e3a';
               let sr = stt.sty;
               setstt({
                 sty : sr,
               })  
               console.table(stt.sty);
             }
          }
      }

    }

//===============================
     // set start 

     
    if(dec.obs == 0 && dec.start == 1 && dec.end == 0)
    {

      for(let i=0;i<row.len;i++)
      {
        for(let j=0;j<row.len;j++)
          {
            if(u == i && v == j)
             {
               grid.mat[i][j] = 1;
               stt.sty[i][j] = '#0d5fbc';
               let sr = stt.sty;
               setstt({
                 sty : sr,
               })  
               console.table(stt.sty);
              //  style.backgroundColor="green";
             }
          }
      }
      // setclo({
      //   bgclo:"grey"
      //   });

    }


//=================================


      console.table(grid.mat);

  }


//================================================

    var me = [
  
    ];
  // var mez = [row.len][row.len];
  for(let i = 0 ; i < row.len;i++)
  {
    let ar = []; 
    // me[i] = [];
    for(let j=0;j<row.len;j++)
      {  
        ar.push(0);   
    
//  console.log(me[i][j]);
     
  }
      me.push(ar);
      // console.log(me);
}

var pa = [
  
];
// var mez = [row.len][row.len];
for(let i = 0 ; i < row.len;i++)
{
let ar = []; 
// me[i] = [];
for(let j=0;j<row.len;j++)
  {  
    ar.push(0);   

//  console.log(me[i][j]);
 
}
  pa.push(ar);
  // console.log(me);
}

//============================================





//=================================================

let table = []
// function ta(){
  // const ta = () => {
// Outer loop to create parent
if(row.len > 0){
for (let i = 0; i < row.len; i++) {
  let children = []
  //Inner loop to create children
  for (let j = 0; j < row.len; j++) {
     let c = `s[${i}][${j}]`;
    //  console.log(s[{i}][{j}]);
    children.push(<td ><button style={{backgroundColor : stt.sty[i][j], width:"40px" , height:"40px",borderRadius:"50%",transition: "0.5s"}} onClick={ () => set(i , j) }></button></td>)
    // children.push(<td ><button style={`sty${i}${j}`} onClick={ () => set(i , j) }>({i},{j})</button></td>)
  }
  //Create the parent and add the children
  table.push(<tbody><tr>{children}</tr></tbody>)
}
}
// }


//====================================================
// const vis ;
   const find = () =>{
   
    //  console.log(stt.sty[0][0]);

      for(let ind=0;ind<row.len;ind++)
      {
        for(let indd =0;indd<row.len;indd++)
        {
             if(grid.mat[ind][indd] == 1){
                    BFS(ind , indd);
                    DFS(ind,indd);
                    // vis = grid.mat;
                  }
        }
      }


   }


   const BFS = (x , y) =>{
    //  const q = new Queue()
     let a = [];
     let b = [];
     a.push(x);
     b.push(y);
   pa[x][y] = 0;
      


     while(a.length != 0 || b.length != 0){
       let xa = a.shift();
       let ya = b.shift();
        me[xa][ya] = 1;
  // setTimeout( () => {

        if(xa - 1 >=0 && xa - 1 < row.len){
        if(me[xa - 1][ya] == 0 && grid.mat[xa - 1][ya] == 0){
            me[xa - 1][ya] = 1;
            a.push(xa - 1);
            b.push(ya); 
            pa[xa - 1][ya] =  1 + pa[xa][ya];   
            // stt.sty[xa - 1][ya] = '#6f827a';
              //  let sr = stt.sty;
               setTimeout(() => {
                stt.sty[xa - 1][ya] = '#6f827a';
                let sr = stt.sty;
                  setstt({
                sty : sr,
              })
             }, 1000);
              //  setstt({
              //    sty : sr,
              //  }) 
            console.log((xa - 1 )+" , "+ya);
            // step++;
            // console.table(me);
        }else{
          if( me[xa - 1][ya] == 0 && grid.mat[xa  - 1][ya] == 3 )
              { console.log("found with "+ pa[xa][ya] +" steps" );
              //  step = 0;
               break;
            }
         }
        }

        if(xa + 1 >=0 && xa + 1 < row.len){
         if(me[xa + 1][ya] == 0 && grid.mat[xa + 1][ya] == 0){
         me[xa + 1][ya] = 1;         
         a.push(xa + 1);
         b.push(ya);  
         pa[xa + 1][ya] =  1 + pa[xa][ya];  
 
         setTimeout( () => 
         {
          stt.sty[xa + 1][ya] = '#6f827a';
          let sr = stt.sty;
           setstt({
          sty : sr,
        }) }, 1000);
  
         console.log((xa + 1) +" , "+ya);

        }else{
          if( me[xa + 1][ya ] == 0 && grid.mat[xa + 1][ya] == 3 )
         { console.log("found with "+ pa[xa][ya]  +" steps" );
          break;
         }}
        }
         
        if(ya + 1 >=0 && ya + 1 < row.len){
         if(me[xa ][ya + 1] == 0 && grid.mat[xa ][ya + 1] == 0){
         me[xa ][ya + 1] = 1;
         a.push(xa);
            b.push(ya + 1); 
            pa[xa][ya + 1] =  1 + pa[xa][ya];  
  
            setTimeout( () => { 
              stt.sty[xa][ya + 1] = '#6f827a';
              let sr = stt.sty;
              setstt({
              sty : sr,
            }) }, 1000);
  
            console.log(xa  +" , "+ (ya + 1) );

        }else{
          if( me[xa ][ya + 1] == 0 && grid.mat[xa ][ya + 1] == 3 )
         { console.log("found with "+ pa[xa][ya]  +" steps" );
          // step = 0;
          break;
         }}
      }

      if(ya - 1 >=0 && ya - 1 < row.len){
           if(me[xa ][ya - 1] == 0 && grid.mat[xa ][ya - 1] == 0){
           me[xa ][ya - 1] = 1;
           a.push(xa );
           b.push(ya - 1);  
           pa[xa][ya - 1] =  1 + pa[xa][ya];  

           setTimeout(() => { 
            stt.sty[xa][ya - 1] = '#6f827a';
            let sr = stt.sty; 
            setstt({
            sty : sr,
          }) }, 1000);
         
           console.log(xa +" , "+ (ya - 1 ));

  
          }else{
           if( me[xa ][ya - 1] == 0 && grid.mat[xa ][ya - 1] == 3 )
           {console.log("found with "+ pa[xa][ya] +" steps" );
    
           break;
          }
          }
      }

   }
   console.table(me);
  //  DFS();
  }

//=====================================================
  const xpath=[];
 const DFS = (x,y) => {

  //  console.log("hy");
  
    // vis[x][y] = 1;
    DFA(x,y);
  //  xpath.push( DFA(x,y) );
  //  console.log(xpath);
  console.log(alx);
  //  display();
   
 }

 let fo = 0;
//=====================================================
const alx=[];
   const DFA = (q,w) => {
   
      //  vis[q][w] = 1;
     let dx = [1,-1,0,0];
     let dy = [0,0,1,-1];
// 
    //  if(q + 1 >=0 && q + 1 < row.len && w >=0 && w <row.len)
    //  {
    //       DFA(q+1 )
    //  }


    

   for(let rt=0;rt<4;rt++)
   {
    
       let sx = dx[rt] + q;
       let sy = dy[rt] + w ;
       if( sx>=0 && sy>=0 && sx<row.len && sy<row.len){
       if(vis.vi[sx][sy] == 0 && grid.mat[sx][sy] == 3 )
       {

        //  vis.vi[sx][sy] = 1;
        //  let yy = vis.vi;
        //  setvis({
        //    vi:yy
        //  }); 
        // //  console.log(" x cor :"+sx+"   y cor: "+sy);
        //     DFA(sx,sy);
        //     if(fo == 1)
        //    return alx.push(`x cor :  ${sx}  y cor :${sy}`); 

           fo = 1;
           let cc ={
            x : sx,
            y : sy
          }
          return alx.push(cc);
          //  return  alx.push(`x cor :  ${sx}  y cor :${sy}`);


       }
      
       else{
         if(vis.vi[sx][sy] == 0 && grid.mat[sx][sy] == 0)
            {
              // fo = 1;
              //  return  alx.push(`x cor :  ${sx}  y cor :${sy}`);


              vis.vi[sx][sy] = 1;
              let yy = vis.vi;
              setvis({
                vi:yy
              }); 
             //  console.log(" x cor :"+sx+"   y cor: "+sy);
                 DFA(sx,sy);
                 if(fo == 1){
                   let c ={
                     x : sx,
                     y : sy
                   }
                  return alx.push(c);
                 }
                // return alx.push(`x cor :  ${sx}  y cor :${sy}`); 






              }
              // else{
              //   return false;
              // }
         
             
       }
      }
   }
  }

  console.table( vis);


  //  }


//=====================================================

  return (
    <div className="App">
      <Hee/>
      <br/>
      <Inp gete={getp} /><br/>
      {/* <button onClick={ta}>table set</button> */}
      <div id="ree">
      <button id="obs" onClick={setterO}>Obtacles</button>&nbsp;&nbsp;
      <button id="sp" onClick={setterS}>Start Point</button>&nbsp;&nbsp;
      <button id="ep" onClick={setterE}>End Point</button>&nbsp;&nbsp;
      <button id="se" onClick={find}>SEARCH</button>
      </div>
      <br/><br/>
      <div className="tb">
      <table>
      {table}
      </table>
      </div>

    </div>
  );

}

export default App;
