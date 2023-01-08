//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let selectkey = "";
let loopkey="";
let radio = "";
let acb="";
let test ="";
var eraset=null;
LOOP_FUNCTIon=null;
FHKEY_function=null;
radio_function=null;
opmode_status = null;
BLFREQ_function = null;
RXFREQB_function=null;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $('#ACB').on("click",function(e){
      acb="test";
      document.getElementById("audio").play();
      document.getElementById("ON").style.color="white";
        setTimeout(function(){ 
        document.getElementById("RADIOCH").style.color="white";
        document.getElementById("one").style.color="white";
        document.getElementById("one1").style.color="white";
        document.getElementById("TXFREQ").style.color="white";
        document.getElementById("D7").style.color="white";
        document.getElementById("D9").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("D3").style.color="white";
        document.getElementById("RXFREQ").style.color="white";
        document.getElementById("FHKEY").style.color="white";
        document.getElementById("FUNC").style.color="white";
        document.getElementById("BLOCKEDL").style.color="white";
        document.getElementById("FREQLOW").style.color="white";
        document.getElementById("BLOCKEDH").style.color="white";
        document.getElementById("FREQHIGH").style.color="white";
        $("#VALUEPOINT,#ALARM").blink({delay:500});
        document.getElementById("1150").style.color="white";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("REM").style.color="white";
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("VALUEPOINT").style.color="white";
        document.getElementById("ALARM").style.color="white"; 
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("FF1").value="C";
        document.getElementById("FF2").value=1;   
        document.getElementById("FF3").value=0;
        document.getElementById("FF4").value=0;
        document.getElementById("BFL1").value=6;
        document.getElementById("BFL2").value=1;   
        document.getElementById("BFL3").value=2;
        document.getElementById("BFL4").value=5;
        document.getElementById("BFH1").value=4;
        document.getElementById("BFH2").value=8;   
        document.getElementById("BFH3").value=7;
        document.getElementById("BFH4").value=5;
         }, 3000);
    }); 
  }); 

  $(document).ready(function(){
    $('#DCB').on("click",function(e){

        document.getElementById("FF1").value="C";
        document.getElementById("FF2").value=1;   
        document.getElementById("FF3").value=0;
        document.getElementById("FF4").value=0;
        document.getElementById("BFL1").value=6;
        document.getElementById("BFL2").value=1;   
        document.getElementById("BFL3").value=2;
        document.getElementById("BFL4").value=5;
        document.getElementById("BFH1").value=4;
        document.getElementById("BFH2").value=8;   
        document.getElementById("BFH3").value=7;
        document.getElementById("BFH4").value=5;
    }); 
  });

  $(document).ready(function(){
    $('#TESTB').on("click",function(e){
      
      test="TESTB"
      var test1="E"
     if(document.getElementById("T1").value=="7" && document.getElementById("T2").value=="2")
      {
      document.getElementById("T1").value="E";
      document.getElementById("T2").value="E";
      document.getElementById("audio").pause();
      click="2"
      }
      else if(document.getElementById("T1").value=test1 || document.getElementById("T2").value=="E")
      {
      document.getElementById("T1").value="";
      document.getElementById("T2").value=".";
      }

    else if(document.getElementById("T1").value=="" && document.getElementById("T2").value==".")
      {
      document.getElementById("T1").value="E";
      document.getElementById("T2").value="E";
      document.getElementById("audio").pause();

      }
    
    }); 
  });

  $(document).ready(function(){
    $('#EDITB').on("click",function(e){
      selectkey = "EDITB";
      // FHKEY_function="edit";
    console.log(FHKEY_function)
    }); 
  });

  $(document).ready(function(){
    $('#RADIOCHB').on("click",function(){
      BLFREQ_function="edited";
      radio_function = "RADIOCHB";
      document.getElementById("ON").style.color="rgba(255, 255, 255, 0.986)";
      console.log(radio_function);
      if(document.getElementById("T1").value=="7" && selectkey=="EDITB")
      {
        document.getElementById("ON").style.color=="white";
        document.getElementById("FF1").value="E";
        document.getElementById("FF2").value="D";
        document.getElementById("FF3").value="0";
        document.getElementById("FF4").value="1";
        document.getElementById("BFL1").value=".";
        document.getElementById("BFL2").value=".";   
        document.getElementById("BFL3").value=".";
        document.getElementById("BFL4").value=".";
        selectkey="EDITTX";
        radio_function="RADIOTX";
        document.getElementById("BFH1").value=".";
        document.getElementById("BFH2").value=".";
        document.getElementById("BFH3").value=".";
        document.getElementById("BFH4").value=".";
        
      }
      if(document.getElementById("T1").value=="E")
      {
        document.getElementById("RADIOCH").style.color="white";
        document.getElementById("one").style.color="white";
        document.getElementById("one1").style.color="white";
        document.getElementById("TXFREQ").style.color="rgb(128, 39, 39)";
        document.getElementById("D7").style.color="white";
        document.getElementById("D9").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("D3").style.color="white";
        document.getElementById("RXFREQ").style.color="rgb(128, 39, 39)";
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
        document.getElementById("FHKEY").style.color="rgb(128, 39, 39)";
        document.getElementById("FUNC").style.color="rgb(128, 39, 39)";
        document.getElementById("BLOCKEDL").style.color="rgb(128, 39, 39)";
        document.getElementById("FREQLOW").style.color="rgb(128, 39, 39)";
        document.getElementById("BLOCKEDH").style.color="rgb(128, 39, 39)";
        document.getElementById("FREQHIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("288").style.color="rgb(128, 39, 39)";
        document.getElementById("576").style.color="rgb(128, 39, 39)";
        document.getElementById("1150").style.color="white";
        document.getElementById("2304").style.color="rgb(128, 39, 39)";
        document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("LOW").style.color="rgb(128, 39, 39)";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("LOC").style.color="rgb(128, 39, 39)";
        document.getElementById("REM").style.color="white";
        document.getElementById("OFF").style.color="rgb(128, 39, 39)";
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
        document.getElementById("VALUEPOINT").style.color="white";
        document.getElementById("ALARM").style.color="white";
        document.getElementById("ON").style.color="white";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("FF1").value="";
        document.getElementById("FF2").value="";
        document.getElementById("FF3").value="";
        document.getElementById("FF4").value="";
        document.getElementById("BFL1").value="";
        document.getElementById("BFL2").value="";
        document.getElementById("BFL3").value="";
        document.getElementById("BFL4").value="";
        document.getElementById("BFH1").value="";
        document.getElementById("BFH2").value="";
        document.getElementById("BFH3").value="";
        document.getElementById("BFH4").value=""; 
        radio_function="RADIO_CHANGED";
        console.log(radio_function);
      }
      
    }); 
  });

  $(document).ready(function(){
    $('#TXFREQB').on("click",function(e){
      
				if(selectkey == "EDITB") 
				{  
          var val1 = document.getElementById("BFL1").value;
          var val2 = document.getElementById("BFL2").value;
            if(val1 && val2)
            {
              document.getElementById("FF1").value="";
              document.getElementById("FF2").value=".";   
              document.getElementById("FF3").value="";
              document.getElementById("FF4").value="";
              document.getElementById("BFL1").value="";
              document.getElementById("BFL2").value=".";   
              document.getElementById("BFL3").value=1;
              document.getElementById("BFL4").value=6;
              document.getElementById("BFH1").value="";
              document.getElementById("BFH2").value="";   
              document.getElementById("BFH3").value="";
              document.getElementById("BFH4").value="";
              document.getElementById("TXFREQ").style.color="white";
              document.getElementById("RADIOCH").style.color="rgb(128, 39, 39)";
              document.getElementById("one").style.color="rgb(128, 39, 39)";
              document.getElementById("one1").style.color="rgb(128, 39, 39)";
              // document.getElementById("TXFREQ").style.color="rgb(128, 39, 39)";
              document.getElementById("D1").style.color="rgb(128, 39, 39)";
              document.getElementById("D2").style.color="rgb(128, 39, 39)";
              document.getElementById("D4").style.color="rgb(128, 39, 39)";
              document.getElementById("D5").style.color="rgb(128, 39, 39)";
              document.getElementById("D8").style.color="rgb(128, 39, 39)";
              document.getElementById("D10").style.color="rgb(128, 39, 39)";
              document.getElementById("D12").style.color="rgb(128, 39, 39)";
              document.getElementById("D7").style.color="rgb(128, 39, 39)";
              document.getElementById("D9").style.color="rgb(128, 39, 39)";
              document.getElementById("D11").style.color="rgb(128, 39, 39)";
              document.getElementById("D3").style.color="rgb(128, 39, 39)";
              document.getElementById("D6").style.color="white";
              document.getElementById("D7").style.color="rgb(128, 39, 39)";
              document.getElementById("D9").style.color="rgb(128, 39, 39)";
              document.getElementById("D11").style.color="rgb(128, 39, 39)";
              document.getElementById("D3").style.color="rgb(128, 39, 39)";
              document.getElementById("RXFREQ").style.color="rgb(128, 39, 39)";
              document.getElementById("FHKEY").style.color="rgb(128, 39, 39)";
              document.getElementById("FUNC").style.color="rgb(128, 39, 39)";
              document.getElementById("BLOCKEDL").style.color="rgb(128, 39, 39)";
              document.getElementById("FREQLOW").style.color="rgb(128, 39, 39)";
              document.getElementById("BLOCKEDH").style.color="rgb(128, 39, 39)";
              document.getElementById("FREQHIGH").style.color="rgb(128, 39, 39)";
              document.getElementById("288").style.color="rgb(128, 39, 39)";
              document.getElementById("576").style.color="rgb(128, 39, 39)";
              document.getElementById("1150").style.color="rgb(128, 39, 39)";
              document.getElementById("2304").style.color="rgb(128, 39, 39)";
              document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
              document.getElementById("LOW").style.color="white";
              document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
              document.getElementById("LOC").style.color="rgb(128, 39, 39)";
              document.getElementById("REM").style.color="rgb(128, 39, 39)";
              document.getElementById("OFF").style.color="rgb(128, 39, 39)";
              document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
              document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
              document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
              document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
              document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
              document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
              document.getElementById("RF1").style.color="rgb(128, 39, 39)";
              document.getElementById("BB2").style.color="rgb(128, 39, 39)";
              document.getElementById("VALUEPOINT").style.color="white";
              document.getElementById("ALARM").style.color="white";
              document.getElementById("LOADKEY").style.color="rgb(128, 39, 39)";
              document.getElementById("BUSY").style.color="rgb(128, 39, 39)";
              document.getElementById("ON").style.color="white";
              document.getElementById("RX0").style.color="white";
            }
            else if(val1 == "" && val2 ==".")
            {
              document.getElementById("FF1").value="C";
              document.getElementById("FF2").value=1;   
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=0;
              document.getElementById("BFL1").value=6;
              document.getElementById("BFL2").value=1;   
              document.getElementById("BFL3").value=2;
              document.getElementById("BFL4").value=5;
              document.getElementById("BFH1").value=4;
              document.getElementById("BFH2").value=8;   
              document.getElementById("BFH3").value=7;
              document.getElementById("BFH4").value=5;
              document.getElementById("RADIOCH").style.color="white";
              document.getElementById("D6").style.color="rgb(128, 39, 39)";
              document.getElementById("one").style.color="white";
              document.getElementById("one1").style.color="white";
              document.getElementById("TXFREQ").style.color="white";
              document.getElementById("D1").style.color="rgb(128, 39, 39)";
              document.getElementById("D2").style.color="rgb(128, 39, 39)";
              document.getElementById("D4").style.color="rgb(128, 39, 39)";
              document.getElementById("D5").style.color="rgb(128, 39, 39)";
              document.getElementById("D6").style.color="rgb(128, 39, 39)";
              document.getElementById("D8").style.color="rgb(128, 39, 39)";
              document.getElementById("D10").style.color="rgb(128, 39, 39)";
              document.getElementById("D12").style.color="rgb(128, 39, 39)";
              document.getElementById("D7").style.color="white";
              document.getElementById("D9").style.color="white";
              document.getElementById("D11").style.color="white";
              document.getElementById("D3").style.color="white";
              document.getElementById("RXFREQ").style.color="white";
              document.getElementById("FHKEY").style.color="white";
              document.getElementById("FUNC").style.color="white";
              document.getElementById("BLOCKEDL").style.color="white";
              document.getElementById("FREQLOW").style.color="white";
              document.getElementById("BLOCKEDH").style.color="white";
              document.getElementById("FREQHIGH").style.color="white";
              // document.getElementById("288").style.color="white";
              // document.getElementById("576").style.color="white";
              document.getElementById("1150").style.color="white";
              // document.getElementById("2304").style.color="white";
              // document.getElementById("HIGH").style.color="white";
              document.getElementById("LOW").style.color="rgb(128, 39, 39)";
              document.getElementById("AUTO").style.color="white";
              // document.getElementById("LOC").style.color="white";
              document.getElementById("REM").style.color="white";
              // document.getElementById("OFF").style.color="white";
              document.getElementById("CONVENTIONAL").style.color="white";
              // document.getElementById("ADAPTIVE").style.color="white";
              document.getElementById("VALUEPOINT").style.color="white";
              document.getElementById("ALARM").style.color="white";
              document.getElementById("ON").style.color="white";
              document.getElementById("RX0").style.color="white";
            }    
        }
        if(document.getElementById("ON").style.color=="rgba(255, 255, 255, 0.986)" || document.getElementById("BFL1").value==".")
        {
              document.getElementById("BFL1").value="";
              document.getElementById("BFL2").value="";   
              document.getElementById("BFL3").value="";
              document.getElementById("BFL4").value=".";
              document.getElementById("BFH1").value="";
              document.getElementById("BFH2").value="";   
              document.getElementById("BFH3").value="";
              document.getElementById("BFH4").value=".";
              selectkey="EDITTX";
              radio_function="RADIOTX"
        }
        if(BLFREQ_function=="edit_in")
        {
              
              document.getElementById("BFL1").value="";
              document.getElementById("BFL2").value="";   
              document.getElementById("BFL3").value="";
              document.getElementById("BFL4").value="";
              console.log("BL_TX")
        } 
    }); 
  });

  $(document).ready(function(){
    $('#RXFREQB').on("click",function(e){
      selectkey="RXFREQB";
      document.getElementById("BFH1").value="";
      document.getElementById("BFH2").value="";   
      document.getElementById("BFH3").value="";
      document.getElementById("BFH4").value="";

    }); 
  });  
  
  $(document).ready(function(){
    $('#BDFB').on("click",function(e){

      if(document.getElementById("BFL2").value==".")
			{
        var BFL3 = document.getElementById("BFL3").value;
        var BFL4 = document.getElementById("BFL4").value;
			  	if(BFL3==1 && BFL4==6) 
            {
              document.getElementById("BFL3").value=1;
              document.getElementById("BFL4").value=5;
            }
          else if(BFL3==1 && BFL4==5) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=4;
          } 
          else if(BFL3==1 && BFL4==4) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=3;
          } 
          else if(BFL3==1 && BFL4==3) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=2;
          } 
          else if(BFL3==1 && BFL4==2) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=1;
          } 
          else if(BFL3==1 && BFL4==1) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=0;
          } 
          else if(BFL3==1 && BFL4==0) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=9;
          }
          else if(BFL3=="" && BFL4==9) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=8;
          }
          else if(BFL3=="" && BFL4==8) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=7;
          }
          else if(BFL3=="" && BFL4==7) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=6;
          }
          else if(BFL3=="" && BFL4==6) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=5;
          }
          else if(BFL3=="" && BFL4==5) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=4;
          }
          else if(BFL3=="" && BFL4==4) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=3;
          }
          else if(BFL3=="" && BFL4==3) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=2;
          }
          else if(BFL3=="" && BFL4==2) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=1;
          }
			}

      if(document.getElementById("FF2").value=="")
			{
        var A = document.getElementById("D6").style.color;
          if(A == "rgb(128, 39, 39)")
          {
              document.getElementById("FF1").value="B";
              document.getElementById("D6").style.color = "rgb(128, 39, 40)";
              console.log("hello i m hear")
          } 
          else if(A == "rgb(128, 39, 40)")
          {
            document.getElementById("FF1").value="D";
            document.getElementById("D6").style.color= "rgb(128, 39, 41)";
          }
          else if(A == "rgb(128, 39, 41)")
          {
            document.getElementById("FF1").value="F"; 
          }
			}

      if(document.getElementById("BFL1").value== ".")
			{
        var FF3 = document.getElementById("FF3").value;
        var FF4 = document.getElementById("FF4").value;
			  	if(FF3==1 && FF4==6) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=5;
            }
           else if(FF3==0 && FF4==1) 
            {
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=1;
            }
          else if(FF3==1 && FF4==5) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=4;
          } 
          else if(FF3==1 && FF4==4) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=3;
          } 
          else if(FF3==1 && FF4==3) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=2;
          } 
          else if(FF3==1 && FF4==2) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=1;
          } 
          else if(FF3==1 && FF4==1) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=0;
          } 
          else if(FF3==1 && FF4==0) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=9;
          }
          else if(FF3==0 && FF4==9) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=8;
          }
          else if(FF3==0 && FF4==8) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=7;
          }
          else if(FF3==0 && FF4==7) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=6;
          }
          else if(FF3==0 && FF4==6) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=5;
          }
          else if(FF3==0 && FF4==5) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=4;
          }
          else if(FF3==0 && FF4==4) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=3;
          }
          else if(FF3==0 && FF4==3) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=2;
          }
          else if(FF3==0 && FF4==2) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=1;
          }
			}

      if(BLFREQ_function=="edit_in")
			{
        var FF3 = document.getElementById("FF3").value;
        var FF4 = document.getElementById("FF4").value;
			  	if(FF3==1 && FF4==6) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=5;
            }
          else if(FF3==0 && FF4==1) 
            {
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=1;
            }
          else if(FF3==2 && FF4==0) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=9;
            }
          else if(FF3==1 && FF4==9) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=8;
            }
          else if(FF3==1 && FF4==8) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=7;
            }
          else if(FF3==1 && FF4==7) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=6;
            }
          else if(FF3==1 && FF4==5) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=4;
          } 
          else if(FF3==1 && FF4==4) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=3;
          } 
          else if(FF3==1 && FF4==3) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=2;
          } 
          else if(FF3==1 && FF4==2) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=1;
          } 
          else if(FF3==1 && FF4==1) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=0;
          } 
          else if(FF3==1 && FF4==0) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=9;
          }
          else if(FF3==0 && FF4==9) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=8;
          }
          else if(FF3==0 && FF4==8) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=7;
          }
          else if(FF3==0 && FF4==7) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=6;
          }
          else if(FF3==0 && FF4==6) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=5;
          }
          else if(FF3==0 && FF4==5) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=4;
          }
          else if(FF3==0 && FF4==4) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=3;
          }
          else if(FF3==0 && FF4==3) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=2;
          }
          else if(FF3==0 && FF4==2) 
          {
            document.getElementById("FF3").value=0;
            document.getElementById("FF4").value=1;
          }
			}

    }); 
  });

  $(document).ready(function(){
    $("#ACEB").click(function() {
      radio = "ACEB";
      if(document.getElementById("BFL2").value==".")
			{
        var BFL3 = document.getElementById("BFL3").value;
        var BFL4 = document.getElementById("BFL4").value;
          if(BFL3==1 && BFL4==5) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=6;
          } 
          else if(BFL3==1 && BFL4==4) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=5;
          } 
          else if(BFL3==1 && BFL4==3) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=4;
          } 
          else if(BFL3==1 && BFL4==2) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=3;
          } 
          else if(BFL3==1 && BFL4==1) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=2;
          } 
          else if(BFL3==1 && BFL4==0) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=1;
          }
          else if(BFL3=="" && BFL4==9) 
          {
            document.getElementById("BFL3").value=1;
            document.getElementById("BFL4").value=0;
          }
          else if(BFL3=="" && BFL4==8) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=9;
          }
          else if(BFL3=="" && BFL4==7) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=8;
          }
          else if(BFL3=="" && BFL4==6) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=7;
          }
          else if(BFL3=="" && BFL4==5) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=6;
          }
          else if(BFL3=="" && BFL4==4) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=5;
          }
          else if(BFL3=="" && BFL4==3) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=4;
          }
          else if(BFL3=="" && BFL4==2) 
          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=3;
          }
			  	else if(BFL3=="" && BFL4==1) 

          {
            document.getElementById("BFL3").value="";
            document.getElementById("BFL4").value=2;
          }

			};

      if(document.getElementById("FF2").value=="")
			{
        var A = document.getElementById("D6").style.color;
          if(A == "rgb(128, 39, 39)")
          {
              document.getElementById("FF1").value="A";
              document.getElementById("D6").style.color = "rgb(128, 39, 40)";
              console.log("hello i m in RADIO WITH ACE")
          } 
          else if(A == "rgb(128, 39, 40)")
          {
            document.getElementById("FF1").value="C";
            document.getElementById("D6").style.color= "rgb(128, 39, 41)";
          }
          else if(A == "rgb(128, 39, 41)")
          {
            document.getElementById("FF1").value="E"; 
          }
			}

      if(document.getElementById("BFL1").value== ".")
			{
        var FF3 = document.getElementById("FF3").value;
        var FF4 = document.getElementById("FF4").value;
			  	if(FF3==1 && FF4==6) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=6;
            }
           else if(FF3==0 && FF4==1) 
            {
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=2;
            }
          else if(FF3==1 && FF4==5) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=6;
          } 
          else if(FF3==1 && FF4==4) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=5;
          } 
          else if(FF3==1 && FF4==3) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=4;
          } 
          else if(FF3==1 && FF4==2) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=3;
          } 
          else if(FF3==1 && FF4==1) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=2;
          } 
          else if(FF3==1 && FF4==0) 
          {
            document.getElementById("FF3").value="1";
            document.getElementById("FF4").value=1;
          }
          else if(FF3=="0" && FF4==9) 
          {
            document.getElementById("FF3").value="1";
            document.getElementById("FF4").value=0;
          }
          else if(FF3=="0" && FF4==8) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=9;
          }
          else if(FF3=="0" && FF4==7) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=8;
          }
          else if(FF3=="0" && FF4==6) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=7;
          }
          else if(FF3=="0" && FF4==5) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=6;
          }
          else if(FF3=="0" && FF4==4) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=5;
          }
          else if(FF3=="0" && FF4==3) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=4;
          }
          else if(FF3=="0" && FF4==2) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=3;
          }
			}

      if(BLFREQ_function=="edit_in")
			{
        var FF3 = document.getElementById("FF3").value;
        var FF4 = document.getElementById("FF4").value;
			  	if(FF3==1 && FF4==6) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=7;
            }
          else if(FF3==1 && FF4==7) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=8;
            }
          else if(FF3==1 && FF4==8) 
            {
              document.getElementById("FF3").value=1;
              document.getElementById("FF4").value=9;
            }
          else if(FF3==1 && FF4==9) 
            {
              document.getElementById("FF3").value=2;
              document.getElementById("FF4").value=0;
            }
          else if(FF3==2 && FF4==0) 
            {
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=1;
            } 
          else if(FF3==0 && FF4==1) 
            {
              document.getElementById("FF3").value=0;
              document.getElementById("FF4").value=2;
            }
          else if(FF3==1 && FF4==5) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=6;
          } 
          else if(FF3==1 && FF4==4) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=5;
          } 
          else if(FF3==1 && FF4==3) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=4;
          } 
          else if(FF3==1 && FF4==2) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=3;
          } 
          else if(FF3==1 && FF4==1) 
          {
            document.getElementById("FF3").value=1;
            document.getElementById("FF4").value=2;
          } 
          else if(FF3==1 && FF4==0) 
          {
            document.getElementById("FF3").value="1";
            document.getElementById("FF4").value=1;
          }
          else if(FF3=="0" && FF4==9) 
          {
            document.getElementById("FF3").value="1";
            document.getElementById("FF4").value=0;
          }
          else if(FF3=="0" && FF4==8) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=9;
          }
          else if(FF3=="0" && FF4==7) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=8;
          }
          else if(FF3=="0" && FF4==6) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=7;
          }
          else if(FF3=="0" && FF4==5) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=6;
          }
          else if(FF3=="0" && FF4==4) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=5;
          }
          else if(FF3=="0" && FF4==3) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=4;
          }
          else if(FF3=="0" && FF4==2) 
          {
            document.getElementById("FF3").value="0";
            document.getElementById("FF4").value=3;
          }
			}

    }); 
  });

  $(document).ready(function(){
    $('#LOOPB').on("click",function(e){
      loopkey = "LOOPB";
      LOOP_FUNCTIon="CLICKED";
      if(document.getElementById("T1").value == 7 && document.getElementById("T2").value == 2 || document.getElementById("T1").value == "E" && document.getElementById("T2").value == "E")
      {
        document.getElementById("PUSH666").style.color="white";
        document.getElementById("PUSHL").style.color="white";
        document.getElementById("PUSH1").style.color="white";
        document.getElementById("PUSH2").style.color="white";
        document.getElementById("RF1").style.color="white";
        document.getElementById("BB2").style.color="white";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
      }
      else if(document.getElementById("T1").value == "" && document.getElementById("T2").value == "")
      {
        document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
        document.getElementById("RF1").style.color="rgb(128, 39, 39)";
        document.getElementById("BB2").style.color="rgb(128, 39, 39)";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
      }   
    }); 
  });


  $(document).ready(function(){
    $('#1B').on("click",function(e){
      debugger;
      if(opmode_status == "on"){
        document.getElementById("288").style.color="white";
        document.getElementById("D1").style.color="white";
        document.getElementById("576").style.color="rgb(128, 39, 39)";
        document.getElementById("1150").style.color="rgb(128, 39, 39)";
        document.getElementById("2304").style.color="rgb(128, 39, 39)";
        document.getElementById("D2").style.color="rgb(128, 39, 39)";
        document.getElementById("D3").style.color="rgb(128, 39, 39)";
        document.getElementById("D4").style.color="rgb(128, 39, 39)";

        document.getElementById("HIGH").style.color="white";
        document.getElementById("LOW").style.color="white";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("D5").style.color="white";
        document.getElementById("D6").style.color="white";
        document.getElementById("D7").style.color="white";

        opmode_status = "not_on";
        console.log(opmode_status);

        
      }
      else if (opmode_status == 'not_on'){
        document.getElementById("HIGH").style.color="white";
        document.getElementById("D5").style.color="white";
        document.getElementById("LOW").style.color="rgb(128, 39, 39)";
        document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
        document.getElementById("D6").style.color="rgb(128, 39, 39)";
        document.getElementById("D7").style.color="rgb(128, 39, 39)";

        document.getElementById("LOC").style.color="white";
        document.getElementById("REM").style.color="white";
        document.getElementById("D8").style.color="white";
        document.getElementById("D9").style.color="white";

        opmode_status = "changed";


      }
      else if(opmode_status== "changed"){
        document.getElementById("LOC").style.color="white";
        document.getElementById("D8").style.color="white";
        document.getElementById("REM").style.color="rgb(128, 39, 39)";
        document.getElementById("D9").style.color="rgb(128, 39, 39)";
        document.getElementById("OFF").style.color="white";
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("ADAPTIVE").style.color="white";
        document.getElementById("D10").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("D12").style.color="white";

        opmode_status = "again_changed";

      }

      else if(opmode_status == "again_changed"){
        document.getElementById("OFF").style.color="white";
        document.getElementById("D10").style.color="white";
        document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
        document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
        document.getElementById("D11").style.color="rgb(128, 39, 39)";
        document.getElementById("D12").style.color="rgb(128, 39, 39)";
        opmode_status = "again_and_again_changed";
        console.log(opmode_status);
      }
       
      if(FHKEY_function=="FH_inside")
      {
        return one_2_nine_FH(this);
      }
    
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }
        
      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

      if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }

      if(BLFREQ_function=="edit_in" && document.getElementById("BFL4").value=="" || BLFREQ_function=="edited")
      {
        return one_2_nine_BL_TX(this);
      }  

      if(loopkey == "LOOPB" && LOOP_FUNCTIon=="CLICKED")
      {
        console.log("hh");
        console.log(LOOP_FUNCTIon);
        document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
        document.getElementById("RF1").style.color="white";
        document.getElementById("BB2").style.color="rgb(128, 39, 39)";
        document.getElementById("VALUEPOINT").style.color="rgb(128, 39, 39)";
        document.getElementById("ALARM").style.color="rgb(128, 39, 39)";
        document.getElementById("LOADKEY").style.color="rgb(128, 39, 39)";
        document.getElementById("BUSY").style.color="rgb(128, 39, 39)";
        document.getElementById("T1").value="";
        document.getElementById("T2").value="";
        $('#VALUEPOINT,#ALARM').unblink({});
        setTimeout(function()
        { 
          document.getElementById("RX0").style.color="rgb(128, 39, 39)";
          document.getElementById("RX1").style.color="white";
            setTimeout(function()
            { 
              document.getElementById("RX1").style.color="rgb(128, 39, 39)";
              document.getElementById("RX2").style.color="white";
                setTimeout(function()
                { 
                  document.getElementById("RX2").style.color="rgb(128, 39, 39)";
                  document.getElementById("RX3").style.color="white";
                }, 600);
            }, 600);
        }, 600);
      }
    }); 
  });

  $(document).ready(function(){
    $('#2B').on("click",function(e){

      if(opmode_status == "on"){
        document.getElementById("576").style.color="white";
        document.getElementById("D2").style.color="white";
        document.getElementById("288").style.color="rgb(128, 39, 39)";
        document.getElementById("1150").style.color="rgb(128, 39, 39)";
        document.getElementById("2304").style.color="rgb(128, 39, 39)";
        document.getElementById("D1").style.color="rgb(128, 39, 39)";
        document.getElementById("D3").style.color="rgb(128, 39, 39)";
        document.getElementById("D4").style.color="rgb(128, 39, 39)";

        document.getElementById("HIGH").style.color="white";
        document.getElementById("LOW").style.color="white";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("D5").style.color="white";
        document.getElementById("D6").style.color="white";
        document.getElementById("D7").style.color="white";

        opmode_status = "not_on";
        console.log(opmode_status);
      }

      else if (opmode_status == 'not_on'){
        document.getElementById("LOW").style.color="white";
        document.getElementById("D6").style.color="white";
        document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
        document.getElementById("D5").style.color="rgb(128, 39, 39)";
        document.getElementById("D7").style.color="rgb(128, 39, 39)";

        document.getElementById("LOC").style.color="white";
        document.getElementById("REM").style.color="white";
        document.getElementById("D8").style.color="white";
        document.getElementById("D9").style.color="white";

        opmode_status = "changed";
        

      }

      else if(opmode_status== "changed"){
        document.getElementById("REM").style.color="white";
        document.getElementById("D9").style.color="white";
        document.getElementById("LOC").style.color="rgb(128, 39, 39)";
        document.getElementById("D8").style.color="rgb(128, 39, 39)";
        document.getElementById("OFF").style.color="white";
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("ADAPTIVE").style.color="white";
        document.getElementById("D10").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("D12").style.color="white";

        opmode_status = "again_changed";

      }

      else if(opmode_status == "again_changed"){
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("OFF").style.color="rgb(128, 39, 39)";
        document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
        document.getElementById("D10").style.color="rgb(128, 39, 39)";
        document.getElementById("D12").style.color="rgb(128, 39, 39)";
        opmode_status = "again_and_again_changed";
        console.log(opmode_status);
      }

      if(FHKEY_function=="FH_inside")
      {
        return one_2_nine_FH(this);
      }

      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }

      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }
        
      if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
      {
        return one_2_nine_TEST(this);
      }  

      if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }

      if(loopkey == "LOOPB")
        {
          document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
          document.getElementById("RF1").style.color="rgb(128, 39, 39)";
          document.getElementById("BB2").style.color="white";
          document.getElementById("VALUEPOINT").style.color="rgb(128, 39, 39)";
          document.getElementById("ALARM").style.color="rgb(128, 39, 39)";
          document.getElementById("T1").value="";
          document.getElementById("T2").value="";
          $('#VALUEPOINT,#ALARM').unblink({});
          setTimeout(function()
          { 
            document.getElementById("RX0").style.color="rgb(128, 39, 39)";
            document.getElementById("RX1").style.color="white";
              setTimeout(function()
              { 
                document.getElementById("RX1").style.color="rgb(128, 39, 39)";
                document.getElementById("RX2").style.color="white";
                  setTimeout(function()
                    { 
                    document.getElementById("RX2").style.color="rgb(128, 39, 39)";
                    document.getElementById("RX3").style.color="white";
                    }, 600);  
              }, 600);
          }, 600);
        }

    }); 
  });

  $(document).ready(function(){
    $('#3B').on("click",function(e){

      if(opmode_status == "on"){
        document.getElementById("1150").style.color="white";
        document.getElementById("D3").style.color="white";
        document.getElementById("288").style.color="rgb(128, 39, 39)";
        document.getElementById("576").style.color="rgb(128, 39, 39)";
        document.getElementById("2304").style.color="rgb(128, 39, 39)";
        document.getElementById("D1").style.color="rgb(128, 39, 39)";
        document.getElementById("D2").style.color="rgb(128, 39, 39)";
        document.getElementById("D4").style.color="rgb(128, 39, 39)";

        document.getElementById("HIGH").style.color="white";
        document.getElementById("LOW").style.color="white";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("D5").style.color="white";
        document.getElementById("D6").style.color="white";
        document.getElementById("D7").style.color="white";

        opmode_status = "not_on";
        console.log(opmode_status);
      }

      else if (opmode_status == 'not_on'){
        document.getElementById("AUTO").style.color="white";
        document.getElementById("D7").style.color="white";
        document.getElementById("LOW").style.color="rgb(128, 39, 39)";
        document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("D6").style.color="rgb(128, 39, 39)";
        document.getElementById("D5").style.color="rgb(128, 39, 39)";

        document.getElementById("LOC").style.color="white";
        document.getElementById("REM").style.color="white";
        document.getElementById("D8").style.color="white";
        document.getElementById("D9").style.color="white";

        opmode_status = "changed";
        

      }
      
      else if(opmode_status == "again_changed"){
        document.getElementById("ADAPTIVE").style.color="white";
        document.getElementById("D12").style.color="white";
        document.getElementById("OFF").style.color="rgb(128, 39, 39)";
        document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
        document.getElementById("D10").style.color="rgb(128, 39, 39)";
        document.getElementById("D11").style.color="rgb(128, 39, 39)";
        opmode_status = "again_and_again_changed";
        console.log(opmode_status);
      }
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }
      if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }

        if(BLFREQ_function=="edit_in")
        {
          return one_2_nine_BL_TX(this);
        }
    }); 
  });

  $(document).ready(function(){
    $('#4B').on("click",function(e){

      if(opmode_status == "on"){
        document.getElementById("2304").style.color="white";
        document.getElementById("D4").style.color="white";
        document.getElementById("288").style.color="rgb(128, 39, 39)";
        document.getElementById("576").style.color="rgb(128, 39, 39)";
        document.getElementById("1150").style.color="rgb(128, 39, 39)";
        document.getElementById("D1").style.color="rgb(128, 39, 39)";
        document.getElementById("D2").style.color="rgb(128, 39, 39)";
        document.getElementById("D3").style.color="rgb(128, 39, 39)";

        document.getElementById("HIGH").style.color="white";
        document.getElementById("LOW").style.color="white";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("D5").style.color="white";
        document.getElementById("D6").style.color="white";
        document.getElementById("D7").style.color="white";

        opmode_status = "not_on";
        console.log(opmode_status);
      }
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }

      if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#5B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }
        if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#6B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }
        if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#7B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

    if(document.getElementById("BFH4").value==".")
      {
        return one_2_nine_BFL(this);
      }
      
    if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
      {
        return one_2_nine_BFH(this);
      }

      if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
      {
        return one_2_nine_TEST(this);
      }
      if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#8B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }
        if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#9B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }
        if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });

  $(document).ready(function(){
    $('#0B').on("click",function(e){
      
      if(radio_function=="RADIO_CHANGED")
        {
          return one_2_nine(this);
        }

      if(document.getElementById("BFH4").value==".")
        {
          return one_2_nine_BFL(this);
        }
        
      if(selectkey=="RXFREQB" && document.getElementById("BFH4").value=="")
        {
          return one_2_nine_BFH(this);
        }

        if(document.getElementById("T2").value == '.' || document.getElementById("T2").value == '.')
        {
          return one_2_nine_TEST(this);
        }
        if(BLFREQ_function=="edit_in")
      {
        return one_2_nine_BL_TX(this);
      }
    }); 
  });



  function checkBox(){
  var checkBox = document.getElementById("checkbox");
  var text = document.getElementById("checkboxtext");
  if (checkBox.checked == true)
  {
    text.innerHTML = "ON";
    $("#watt").show();
    var min=7.09;
    var max=10.81;
    var rnd =   Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('randomnumber').innerHTML = rnd + "W";
  }
  else {
    text.innerHTML = "OFF";
    $("#watt").hide()
  }
}
  
$(document).ready(function(){
  $("#watt").hide()
});

$(document).ready(function(){
  $("#OPMODEB").on("click",function(){
    // console.log("opmode on!!");
    opmode_status = "on";
    document.getElementById("288").style.color="white";
    document.getElementById("576").style.color="white";
    document.getElementById("1150").style.color="white";
    document.getElementById("2304").style.color="white";
    document.getElementById("D1").style.color="white";
    document.getElementById("D2").style.color="white";
    document.getElementById("D3").style.color="white";
    document.getElementById("D4").style.color="white";

    document.getElementById("D5").style.color="rgb(128, 39, 39)";
    document.getElementById("D6").style.color="rgb(128, 39, 39)";
    document.getElementById("D7").style.color="rgb(128, 39, 39)";
    document.getElementById("D8").style.color="rgb(128, 39, 39)";
    document.getElementById("D9").style.color="rgb(128, 39, 39)";
    document.getElementById("D10").style.color="rgb(128, 39, 39)";
    document.getElementById("D11").style.color="rgb(128, 39, 39)";
    document.getElementById("D12").style.color="rgb(128, 39, 39)";
    document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
    document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
    document.getElementById("LOW").style.color="rgb(128, 39, 39)";
    document.getElementById("LOC").style.color="rgb(128, 39, 39)";
    document.getElementById("REM").style.color="rgb(128, 39, 39)";
    document.getElementById("OFF").style.color="rgb(128, 39, 39)";
    document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
    document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";

    console.log(opmode_status);
  })
});

$(document).ready(function(){
  $("#BLFREQB").on("click",function(){
    debugger;
    console.log(BLFREQ_function)
    if(BLFREQ_function==null || BLFREQ_function=="edited")
    {
      document.getElementById("FF1").value="B";
      document.getElementById("FF2").value="B";
      document.getElementById("FF3").value="0";
      document.getElementById("FF4").value="1";
      document.getElementById("BFL1").value="0";
      document.getElementById("BFL2").value="0";   
      document.getElementById("BFL3").value="0";
      document.getElementById("BFL4").value="0";
      document.getElementById("BFH1").value="0";
      document.getElementById("BFH2").value="0";
      document.getElementById("BFH3").value="0";
      document.getElementById("BFH4").value="0";
      BLFREQ_function="edit_in";
      selectkey="E";
      console.log(selectkey);
      console.log(BLFREQ_function);
    }
    else if(BLFREQ_function=="edit_in")
    {
      document.getElementById("FF1").value="C";
      document.getElementById("FF2").value="1";
      document.getElementById("FF3").value="0";
      document.getElementById("FF4").value="0";
      document.getElementById("BFL1").value="6";
      document.getElementById("BFL2").value="1";   
      document.getElementById("BFL3").value="2";
      document.getElementById("BFL4").value="5";
      document.getElementById("BFH1").value="4";
      document.getElementById("BFH2").value="8";
      document.getElementById("BFH3").value="7";
      document.getElementById("BFH4").value="5";
      BLFREQ_function=null;
      console.log(BLFREQ_function);
    }
    
  })
});

// $(document).ready(function(){
//   $("#ERASETB1").on("click",function(){

//     if(eraset==null)
//   {
// eraset="clicked_var_eraset1"
// console.log(eraset);
//   }

//   if(eraset=="clicked_var_eraset2")
//   {
//     document.getElementById("TXFREQ").style.color="white";
//     console.log("IN1");
//     eraset=null;
//     console.log(eraset);
//   }

//   })
// });

// $(document).ready(function(){
//   $("#ERASETB2").on("click",function(){
// // debugger;
//     if(eraset==null)
//   {
//   eraset="clicked_var_eraset2"
//   console.log(eraset);
//   }

//   if(eraset=="clicked_var_eraset1")
//   {
//     document.getElementById("ERASETB2").style.backgroundColor = "red";
//     console.log("IN2");
//     eraset=null;
//     console.log(eraset);
//   }

//   })
// });

$(document).ready(function(){
  $("#FHKEYB").on("click",function(){
    if(document.getElementById("CONVENTIONAL").style.color=="white")
   {
    $("#FF1,#FF2,#FF3,#FF4").blink({delay:500});
      setTimeout(function()
      { 
        $('#FF1,#FF2,#FF3,#FF4').unblink({});
       }, 10000);
     console.log(FHKEY_function);

   }

   if(FHKEY_function==null && document.getElementById("OFF").style.color=="white")
   {
     document.getElementById("FF1").value="";
     document.getElementById("FF2").value="";
     document.getElementById("FF3").value="";
     document.getElementById("FF4").value="";
     FHKEY_function="FH_inside";
     console.log(FHKEY_function)
   }
   else if(FHKEY_function=="FH_inside")
   {
    document.getElementById("FF1").value="C";
    document.getElementById("FF2").value=1;   
    document.getElementById("FF3").value=0;
    document.getElementById("FF4").value=0;
    FHKEY_function="FH_outside";
    console.log(FHKEY_function)
   }
  })
});

///////////////////////////////////////////////////////////////////////////// PRESS AND HOLD ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  $("#OPMODEB1").on("click",function(){
    // console.log("opmode on!!");
    opmode_status = "on";
    document.getElementById("288").style.color="white";
    document.getElementById("576").style.color="white";
    document.getElementById("1150").style.color="white";
    document.getElementById("2304").style.color="white";
    document.getElementById("D1").style.color="white";
    document.getElementById("D2").style.color="white";
    document.getElementById("D3").style.color="white";
    document.getElementById("D4").style.color="white";

    document.getElementById("D5").style.color="rgb(128, 39, 39)";
    document.getElementById("D6").style.color="rgb(128, 39, 39)";
    document.getElementById("D7").style.color="rgb(128, 39, 39)";
    document.getElementById("D8").style.color="rgb(128, 39, 39)";
    document.getElementById("D9").style.color="rgb(128, 39, 39)";
    document.getElementById("D10").style.color="rgb(128, 39, 39)";
    document.getElementById("D11").style.color="rgb(128, 39, 39)";
    document.getElementById("D12").style.color="rgb(128, 39, 39)";
    document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
    document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
    document.getElementById("LOW").style.color="rgb(128, 39, 39)";
    document.getElementById("LOC").style.color="rgb(128, 39, 39)";
    document.getElementById("REM").style.color="rgb(128, 39, 39)";
    document.getElementById("OFF").style.color="rgb(128, 39, 39)";
    document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
    document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";

    console.log(opmode_status);
  })
});

$(document).ready(function(){
  $('#TESTB1').on("click",function(e){
    
    test="TESTB"
      var test1="E"
     if(document.getElementById("T1").value=="7" && document.getElementById("T2").value=="2")
      {
      document.getElementById("T1").value="E";
      document.getElementById("T2").value="E";
      document.getElementById("audio").pause();
      click="2"
      }
      else if(document.getElementById("T1").value=test1 || document.getElementById("T2").value=="E")
      {
      document.getElementById("T1").value="";
      document.getElementById("T2").value=".";
      }

    else if(document.getElementById("T1").value=="" && document.getElementById("T2").value==".")
      {
      document.getElementById("T1").value="E";
      document.getElementById("T2").value="E";
      document.getElementById("audio").pause();

      }
  
  }); 
});

$(document).ready(function(){
  $('#EDITB1').on("click",function(e){
    selectkey = "EDITB";
      // FHKEY_function="edit";
    console.log(FHKEY_function)
  }); 
});

$(document).ready(function(){
  $('#RADIOCHB1').on("click",function(){
  
    BLFREQ_function="edited";
      radio_function = "RADIOCHB";
      document.getElementById("ON").style.color="rgba(255, 255, 255, 0.986)";
      console.log(radio_function);
      if(document.getElementById("T1").value=="7" && selectkey=="EDITB")
      {
        document.getElementById("ON").style.color=="white";
        document.getElementById("FF1").value="E";
        document.getElementById("FF2").value="D";
        document.getElementById("FF3").value="0";
        document.getElementById("FF4").value="1";
        document.getElementById("BFL1").value=".";
        document.getElementById("BFL2").value=".";   
        document.getElementById("BFL3").value=".";
        document.getElementById("BFL4").value=".";
        selectkey="EDITTX";
        radio_function="RADIOTX";
        document.getElementById("BFH1").value=".";
        document.getElementById("BFH2").value=".";
        document.getElementById("BFH3").value=".";
        document.getElementById("BFH4").value=".";
        
      }
      if(document.getElementById("T1").value=="E")
      {
        document.getElementById("RADIOCH").style.color="white";
        document.getElementById("one").style.color="white";
        document.getElementById("one1").style.color="white";
        document.getElementById("TXFREQ").style.color="rgb(128, 39, 39)";
        document.getElementById("D7").style.color="white";
        document.getElementById("D9").style.color="white";
        document.getElementById("D11").style.color="white";
        document.getElementById("D3").style.color="white";
        document.getElementById("RXFREQ").style.color="rgb(128, 39, 39)";
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
        document.getElementById("FHKEY").style.color="rgb(128, 39, 39)";
        document.getElementById("FUNC").style.color="rgb(128, 39, 39)";
        document.getElementById("BLOCKEDL").style.color="rgb(128, 39, 39)";
        document.getElementById("FREQLOW").style.color="rgb(128, 39, 39)";
        document.getElementById("BLOCKEDH").style.color="rgb(128, 39, 39)";
        document.getElementById("FREQHIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("288").style.color="rgb(128, 39, 39)";
        document.getElementById("576").style.color="rgb(128, 39, 39)";
        document.getElementById("1150").style.color="white";
        document.getElementById("2304").style.color="rgb(128, 39, 39)";
        document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
        document.getElementById("LOW").style.color="rgb(128, 39, 39)";
        document.getElementById("AUTO").style.color="white";
        document.getElementById("LOC").style.color="rgb(128, 39, 39)";
        document.getElementById("REM").style.color="white";
        document.getElementById("OFF").style.color="rgb(128, 39, 39)";
        document.getElementById("CONVENTIONAL").style.color="white";
        document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
        document.getElementById("VALUEPOINT").style.color="white";
        document.getElementById("ALARM").style.color="white";
        document.getElementById("ON").style.color="white";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("FF1").value="";
        document.getElementById("FF2").value="";
        document.getElementById("FF3").value="";
        document.getElementById("FF4").value="";
        document.getElementById("BFL1").value="";
        document.getElementById("BFL2").value="";
        document.getElementById("BFL3").value="";
        document.getElementById("BFL4").value="";
        document.getElementById("BFH1").value="";
        document.getElementById("BFH2").value="";
        document.getElementById("BFH3").value="";
        document.getElementById("BFH4").value=""; 
        radio_function="RADIO_CHANGED";
        console.log(radio_function);
      }
    
  }); 
});
$(document).ready(function(){
  $('#TXFREQB1').on("click",function(e){
    
    if(selectkey == "EDITB") 
    {  
      var val1 = document.getElementById("BFL1").value;
      var val2 = document.getElementById("BFL2").value;
        if(val1 && val2)
        {
          document.getElementById("FF1").value="";
          document.getElementById("FF2").value=".";   
          document.getElementById("FF3").value="";
          document.getElementById("FF4").value="";
          document.getElementById("BFL1").value="";
          document.getElementById("BFL2").value=".";   
          document.getElementById("BFL3").value=1;
          document.getElementById("BFL4").value=6;
          document.getElementById("BFH1").value="";
          document.getElementById("BFH2").value="";   
          document.getElementById("BFH3").value="";
          document.getElementById("BFH4").value="";
          document.getElementById("TXFREQ").style.color="white";
          document.getElementById("RADIOCH").style.color="rgb(128, 39, 39)";
          document.getElementById("one").style.color="rgb(128, 39, 39)";
          document.getElementById("one1").style.color="rgb(128, 39, 39)";
          // document.getElementById("TXFREQ").style.color="rgb(128, 39, 39)";
          document.getElementById("D1").style.color="rgb(128, 39, 39)";
          document.getElementById("D2").style.color="rgb(128, 39, 39)";
          document.getElementById("D4").style.color="rgb(128, 39, 39)";
          document.getElementById("D5").style.color="rgb(128, 39, 39)";
          document.getElementById("D8").style.color="rgb(128, 39, 39)";
          document.getElementById("D10").style.color="rgb(128, 39, 39)";
          document.getElementById("D12").style.color="rgb(128, 39, 39)";
          document.getElementById("D7").style.color="rgb(128, 39, 39)";
          document.getElementById("D9").style.color="rgb(128, 39, 39)";
          document.getElementById("D11").style.color="rgb(128, 39, 39)";
          document.getElementById("D3").style.color="rgb(128, 39, 39)";
          document.getElementById("D6").style.color="white";
          document.getElementById("D7").style.color="rgb(128, 39, 39)";
          document.getElementById("D9").style.color="rgb(128, 39, 39)";
          document.getElementById("D11").style.color="rgb(128, 39, 39)";
          document.getElementById("D3").style.color="rgb(128, 39, 39)";
          document.getElementById("RXFREQ").style.color="rgb(128, 39, 39)";
          document.getElementById("FHKEY").style.color="rgb(128, 39, 39)";
          document.getElementById("FUNC").style.color="rgb(128, 39, 39)";
          document.getElementById("BLOCKEDL").style.color="rgb(128, 39, 39)";
          document.getElementById("FREQLOW").style.color="rgb(128, 39, 39)";
          document.getElementById("BLOCKEDH").style.color="rgb(128, 39, 39)";
          document.getElementById("FREQHIGH").style.color="rgb(128, 39, 39)";
          document.getElementById("288").style.color="rgb(128, 39, 39)";
          document.getElementById("576").style.color="rgb(128, 39, 39)";
          document.getElementById("1150").style.color="rgb(128, 39, 39)";
          document.getElementById("2304").style.color="rgb(128, 39, 39)";
          document.getElementById("HIGH").style.color="rgb(128, 39, 39)";
          document.getElementById("LOW").style.color="white";
          document.getElementById("AUTO").style.color="rgb(128, 39, 39)";
          document.getElementById("LOC").style.color="rgb(128, 39, 39)";
          document.getElementById("REM").style.color="rgb(128, 39, 39)";
          document.getElementById("OFF").style.color="rgb(128, 39, 39)";
          document.getElementById("CONVENTIONAL").style.color="rgb(128, 39, 39)";
          document.getElementById("ADAPTIVE").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
          document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
          document.getElementById("RF1").style.color="rgb(128, 39, 39)";
          document.getElementById("BB2").style.color="rgb(128, 39, 39)";
          document.getElementById("VALUEPOINT").style.color="white";
          document.getElementById("ALARM").style.color="white";
          document.getElementById("LOADKEY").style.color="rgb(128, 39, 39)";
          document.getElementById("BUSY").style.color="rgb(128, 39, 39)";
          document.getElementById("ON").style.color="white";
          document.getElementById("RX0").style.color="white";
        }
        else if(val1 == "" && val2 ==".")
        {
          document.getElementById("FF1").value="C";
          document.getElementById("FF2").value=1;   
          document.getElementById("FF3").value=0;
          document.getElementById("FF4").value=0;
          document.getElementById("BFL1").value=6;
          document.getElementById("BFL2").value=1;   
          document.getElementById("BFL3").value=2;
          document.getElementById("BFL4").value=5;
          document.getElementById("BFH1").value=4;
          document.getElementById("BFH2").value=8;   
          document.getElementById("BFH3").value=7;
          document.getElementById("BFH4").value=5;
          document.getElementById("RADIOCH").style.color="white";
          document.getElementById("D6").style.color="rgb(128, 39, 39)";
          document.getElementById("one").style.color="white";
          document.getElementById("one1").style.color="white";
          document.getElementById("TXFREQ").style.color="white";
          document.getElementById("D1").style.color="rgb(128, 39, 39)";
          document.getElementById("D2").style.color="rgb(128, 39, 39)";
          document.getElementById("D4").style.color="rgb(128, 39, 39)";
          document.getElementById("D5").style.color="rgb(128, 39, 39)";
          document.getElementById("D6").style.color="rgb(128, 39, 39)";
          document.getElementById("D8").style.color="rgb(128, 39, 39)";
          document.getElementById("D10").style.color="rgb(128, 39, 39)";
          document.getElementById("D12").style.color="rgb(128, 39, 39)";
          document.getElementById("D7").style.color="white";
          document.getElementById("D9").style.color="white";
          document.getElementById("D11").style.color="white";
          document.getElementById("D3").style.color="white";
          document.getElementById("RXFREQ").style.color="white";
          document.getElementById("FHKEY").style.color="white";
          document.getElementById("FUNC").style.color="white";
          document.getElementById("BLOCKEDL").style.color="white";
          document.getElementById("FREQLOW").style.color="white";
          document.getElementById("BLOCKEDH").style.color="white";
          document.getElementById("FREQHIGH").style.color="white";
          // document.getElementById("288").style.color="white";
          // document.getElementById("576").style.color="white";
          document.getElementById("1150").style.color="white";
          // document.getElementById("2304").style.color="white";
          // document.getElementById("HIGH").style.color="white";
          document.getElementById("LOW").style.color="rgb(128, 39, 39)";
          document.getElementById("AUTO").style.color="white";
          // document.getElementById("LOC").style.color="white";
          document.getElementById("REM").style.color="white";
          // document.getElementById("OFF").style.color="white";
          document.getElementById("CONVENTIONAL").style.color="white";
          // document.getElementById("ADAPTIVE").style.color="white";
          document.getElementById("VALUEPOINT").style.color="white";
          document.getElementById("ALARM").style.color="white";
          document.getElementById("ON").style.color="white";
          document.getElementById("RX0").style.color="white";
        }    
    }
    if(document.getElementById("ON").style.color=="rgba(255, 255, 255, 0.986)" || document.getElementById("BFL1").value==".")
    {
          document.getElementById("BFL1").value="";
          document.getElementById("BFL2").value="";   
          document.getElementById("BFL3").value="";
          document.getElementById("BFL4").value=".";
          document.getElementById("BFH1").value="";
          document.getElementById("BFH2").value="";   
          document.getElementById("BFH3").value="";
          document.getElementById("BFH4").value=".";
          selectkey="EDITTX";
          radio_function="RADIOTX"
    }
    if(BLFREQ_function=="edit_in")
    {
          
          document.getElementById("BFL1").value="";
          document.getElementById("BFL2").value="";   
          document.getElementById("BFL3").value="";
          document.getElementById("BFL4").value="";
          console.log("BL_TX")
    } 
     
  }); 
});

$(document).ready(function(){
  $('#RXFREQB1').on("click",function(e){
    selectkey="RXFREQB";
      document.getElementById("BFH1").value="";
      document.getElementById("BFH2").value="";   
      document.getElementById("BFH3").value="";
      document.getElementById("BFH4").value="";

  }); 
}); 

$(document).ready(function(){
  $('#LOOPB1').on("click",function(e){
    loopkey = "LOOPB";
    LOOP_FUNCTIon="CLICKED";
      if(document.getElementById("T1").value == 7 && document.getElementById("T2").value == 2 || document.getElementById("T1").value == "E" && document.getElementById("T2").value == "E")
      {
        document.getElementById("PUSH666").style.color="white";
        document.getElementById("PUSHL").style.color="white";
        document.getElementById("PUSH1").style.color="white";
        document.getElementById("PUSH2").style.color="white";
        document.getElementById("RF1").style.color="white";
        document.getElementById("BB2").style.color="white";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
      }
      else if(document.getElementById("T1").value == "" && document.getElementById("T2").value == "")
      {
        document.getElementById("PUSH666").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSHL").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH1").style.color="rgb(128, 39, 39)";
        document.getElementById("PUSH2").style.color="rgb(128, 39, 39)";
        document.getElementById("RF1").style.color="rgb(128, 39, 39)";
        document.getElementById("BB2").style.color="rgb(128, 39, 39)";
        document.getElementById("RX0").style.color="white";
        document.getElementById("T1").value=7;
        document.getElementById("T2").value=2;
        document.getElementById("RX3").style.color="rgb(128, 39, 39)";
      }
  }); 
});

$(document).ready(function(){
  $("#ERASETB11").on("click",function(){

    if(eraset==null)
  {
    eraset="clicked_var_eraset1";
    console.log(eraset);
  }

  if(eraset=="clicked_var_eraset2")
  {
    document.getElementById("TXFREQ").style.color="white";
    console.log("IN1");
    eraset=null;
    console.log(eraset);
  }

  })
});

$(document).ready(function(){
  $("#ERASETB22").on("click",function(){

    if(eraset==null)
  {
    eraset="clicked_var_eraset2";
    console.log(eraset);
  }

  if(eraset=="clicked_var_eraset1")
  {
    document.getElementById("ERASETB2").style.backgroundColor = "red";
    console.log("IN2");
    eraset=null;
    console.log(eraset);
  }

  })
});

$(document).ready(function(){
  $("#BLFREQB1").on("click",function(){
    if(BLFREQ_function==null)
    {
      document.getElementById("FF1").value="B";
      document.getElementById("FF2").value="B";
      document.getElementById("FF3").value="0";
      document.getElementById("FF4").value="1";
      document.getElementById("BFL1").value="0";
      document.getElementById("BFL2").value="0";   
      document.getElementById("BFL3").value="0";
      document.getElementById("BFL4").value="0";
      document.getElementById("BFH1").value="0";
      document.getElementById("BFH2").value="0";
      document.getElementById("BFH3").value="0";
      document.getElementById("BFH4").value="0";
      BLFREQ_function="edit_in";
      selectkey="E";
      console.log(selectkey);
      console.log(BLFREQ_function);
    }
    else if(BLFREQ_function=="edit_in")
    {
      document.getElementById("FF1").value="C";
      document.getElementById("FF2").value="1";
      document.getElementById("FF3").value="0";
      document.getElementById("FF4").value="0";
      document.getElementById("BFL1").value="6";
      document.getElementById("BFL2").value="1";   
      document.getElementById("BFL3").value="2";
      document.getElementById("BFL4").value="5";
      document.getElementById("BFH1").value="4";
      document.getElementById("BFH2").value="8";
      document.getElementById("BFH3").value="7";
      document.getElementById("BFH4").value="5";
      BLFREQ_function=null;
      console.log(BLFREQ_function);
    }
    
  })
});