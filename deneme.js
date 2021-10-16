const block = document.querySelectorAll(".block")
const playerText = document.getElementById("player")
const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const s4 = document.getElementById("s4")
const s5 = document.getElementById("s5")
const s6 = document.getElementById("s6")
const s7 = document.getElementById("s7")
const s8 = document.getElementById("s8")
const s9 = document.getElementById("s9")
let player = "X"
const sıra = document.getElementById("sıra")
const kazanan = document.getElementById("kazanan")



turn()
function startgame(){
  block.forEach(block => block.addEventListener("click", () => choosearea(block)))}

  function choosearea(block) {
    block.textContent = player
    changeplayer()
    turn()
    beraber()
}
  function changeplayer(){
    if(player === "X"){
      player="O";
      checkwin()
      beraber()
      return;
    }
    else if(player === "O"){
      player="X"
      checkwin()
      beraber()
      
  }

}
  function checkwin(){
    if(s1.textContent !== "" && s1.textContent === s2.textContent && s2.textContent === s3.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s1.textContent      }, 500);
    }
    if(s4.textContent !== "" && s4.textContent === s5.textContent && s5.textContent === s6.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:" 
      document.getElementById("kazanan").innerHTML = s4.textContent   }, 500);
    }
    if(s7.textContent !== "" && s7.textContent === s8.textContent && s8.textContent === s9.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s7.textContent }, 500);
      
    }
    if(s1.textContent !== "" && s1.textContent === s4.textContent && s4.textContent === s7.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s1.textContent  }, 500);
    }
    if(s2.textContent !== "" && s5.textContent === s2.textContent && s5.textContent === s8.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s2.textContent  }, 500);
    }
    if(s3.textContent !== "" && s6.textContent === s3.textContent && s6.textContent === s9.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s3.textContent  }, 500);
    }
    if(s1.textContent !== "" && s1.textContent === s5.textContent && s5.textContent === s9.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s1.textContent  }, 500);
    }
    if(s3.textContent !== "" && s3.textContent === s5.textContent && s5.textContent === s7.textContent ){
      setTimeout(() => { alert("Oyun Bitti"), document.getElementById("sıra").innerHTML = "Oyun Bitti, Kazanan:"
      document.getElementById("kazanan").innerHTML = s3.textContent }, 500);
    }
      
}
startgame()

function turn(){
  if(player == "X"){
    console.log("X'in sırası")
    document.getElementById("sıra").innerHTML = "X'in Sırası";
  }
  if(player == "O"){
    console.log("O'nun sırası")
    document.getElementById("sıra").innerHTML = "O'nun Sırası";
  }
}

function beraber(){
  if(s1.textContent !== "" && s2.textContent !== "" && s3.textContent !== "" && s4.textContent !== "" && s5.textContent !== "" && s6.textContent !== "" && s7.textContent !== "" && s8.textContent !== "" && s9.textContent !== "" && Boolean(checkwin()) !== 0){
    document.getElementById("sıra").innerHTML = "Oyun Bitti:"
    document.getElementById("kazanan").innerHTML = "Berabere"
  }
}





