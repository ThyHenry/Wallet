const bar = document.getElementsByClassName("grafic");
const value = document.getElementsByClassName("amount");
const mon = bar.item(0);
const tue = bar.item(1);
const wed = bar.item(2);
const thu = bar.item(3);
const fri = bar.item(4);
const sat = bar.item(5);
const sun = bar.item(6);
let amount;


let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

  let newData = []

    for(let value in data) {

      newData.push(data[value].amount);

    }

    maxValue = Math.max.apply(null,newData);

    value.item(0).innerHTML = "$" + newData[0];
    value.item(1).innerHTML = "$" + newData[1];
    value.item(2).innerHTML = "$" + newData[2];
    value.item(3).innerHTML = "$" + newData[3];
    value.item(4).innerHTML = "$" + newData[4];
    value.item(5).innerHTML = "$" + newData[5];
    value.item(6).innerHTML = "$" + newData[6];

    let percent = newData.map((n) => n * 100 / maxValue);

    mon.style.height = percent[0] + "%"
    tue.style.height = percent[1] + "%"
    wed.style.height = percent[2] + "%"
    thu.style.height = percent[3] + "%"
    fri.style.height = percent[4] + "%"
    sat.style.height = percent[5] + "%"
    sun.style.height = percent[6] + "%"

    if(mon.style.height === "100%") {
      mon.style.background = "hsl(186, 34%, 60%)";
      mon.addEventListener("mouseover", () => {
        mon.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      mon.addEventListener("mouseout", () => {
        mon.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      mon.style.background = "hsl(10, 79%, 65%)";
      mon.addEventListener("mouseover", () => {
          mon.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
        })
      mon.addEventListener("mouseout", () => {
        mon.style.background = "hsl(10, 79%, 65%)";
      })
    }

    


    if(tue.style.height === "100%") {
      tue.style.background = "hsl(186, 34%, 60%)";
      tue.addEventListener("mouseover", () => {
        tue.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      tue.addEventListener("mouseout", () => {
        tue.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      tue.style.background = "hsl(10, 79%, 65%)";
      tue.addEventListener("mouseover", () => {
        tue.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
    tue.addEventListener("mouseout", () => {
      tue.style.background = "hsl(10, 79%, 65%)";
    })
    }

    


    if(wed.style.height === "100%") {
      wed.style.background = "hsl(186, 34%, 60%)";
      wed.addEventListener("mouseover", () => {
        wed.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      wed.addEventListener("mouseout", () => {
        wed.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      wed.style.background = "hsl(10, 79%, 65%)";
     wed.addEventListener("mouseover", () => {
       wed.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
   wed.addEventListener("mouseout", () => {
     wed.style.background = "hsl(10, 79%, 65%)";
    })
    }



    
    if(thu.style.height === "100%") {
      thu.style.background = "hsl(186, 34%, 60%)";
      thu.addEventListener("mouseover", () => {
        thu.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      thu.addEventListener("mouseout", () => {
        thu.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      thu.style.background = "hsl(10, 79%, 65%)";
     thu.addEventListener("mouseover", () => {
       thu.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
   thu.addEventListener("mouseout", () => {
     thu.style.background = "hsl(10, 79%, 65%)";
    })
    }

    


    if(fri.style.height === "100%") {
      fri.style.background = "hsl(186, 34%, 60%)";
     fri.addEventListener("mouseover", () => {
       fri.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
     fri.addEventListener("mouseout", () => {
       fri.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      fri.style.background = "hsl(10, 79%, 65%)";
      fri.addEventListener("mouseover", () => {
        fri.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
    fri.addEventListener("mouseout", () => {
      fri.style.background = "hsl(10, 79%, 65%)";
    })
    }

    
    if(sat.style.height === "100%") {
      sat.style.background = "hsl(186, 34%, 60%)";
      sat.addEventListener("mouseover", () => {
        sat.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      sat.addEventListener("mouseout", () => {
        sat.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      sat.style.background = "hsl(10, 79%, 65%)";
     sat.addEventListener("mouseover", () => {
       sat.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
   sat.addEventListener("mouseout", () => {
     sat.style.background = "hsl(10, 79%, 65%)";
    })
    }

    
    if(sun.style.height === "100%") {
      sun.style.background = "hsl(186, 34%, 60%)";
      sun.addEventListener("mouseover", () => {
        sun.style.backgroundColor = "hsla(186, 34%, 60%, 0.704)";
      })
      sun.addEventListener("mouseout", () => {
        sun.style.background = "hsl(186, 34%, 60%)";
      })
    } else {
      sun.style.background = "hsl(10, 79%, 65%)";
     sun.addEventListener("mouseover", () => {
       sun.style.backgroundColor = "hsla(10, 79%, 65%, 0.704)";
      })
   sun.addEventListener("mouseout", () => {
     sun.style.background = "hsl(10, 79%, 65%)";
    })
    }

// value


    mon.addEventListener("mouseover", () => {
      if(value.item(0).style.display === "none" || !value.item(0).style.display) {
        value.item(0).style.display = "block";
      } else {
        value.item(0).style.display = "none";
      }
    })
    mon.addEventListener("mouseout", () => {
      if(value.item(0).style.display === "block") {
        value.item(0).style.display = "none";
      } else {
        value.itemm(0).style.display = "block";
      }
    })


    tue.addEventListener("mouseover", () => {
      if(value.item(1).style.display === "none" || !value.item(1).style.display) {
        value.item(1).style.display = "block";
      } else {
        value.item(1).style.display = "none";
      }
    })
    tue.addEventListener("mouseout", () => {
      if(value.item(1).style.display === "block") {
        value.item(1).style.display = "none";
      } else {
        value.itemm(1).style.display = "block";
      }
    })


    wed.addEventListener("mouseover", () => {
      if(value.item(2).style.display === "none" || !value.item(2).style.display) {
        value.item(2).style.display = "block";
      } else {
        value.item(2).style.display = "none";
      }
    })
    wed.addEventListener("mouseout", () => {
      if(value.item(2).style.display === "block") {
        value.item(2).style.display = "none";
      } else {
        value.itemm(2).style.display = "block";
      }
    })


    thu.addEventListener("mouseover", () => {
      if(value.item(3).style.display === "none" || !value.item(3).style.display) {
        value.item(3).style.display = "block";
      } else {
        value.item(3).style.display = "none";
      }
    })
    thu.addEventListener("mouseout", () => {
      if(value.item(3).style.display === "block") {
        value.item(3).style.display = "none";
      } else {
        value.itemm(3).style.display = "block";
      }
    })


    fri.addEventListener("mouseover", () => {
      if(value.item(4).style.display === "none" || !value.item(4).style.display) {
        value.item(4).style.display = "block";
      } else {
        value.item(4).style.display = "none";
      }
    })
    fri.addEventListener("mouseout", () => {
      if(value.item(4).style.display === "block") {
        value.item(4).style.display = "none";
      } else {
        value.itemm(4).style.display = "block";
      }
    })


    sat.addEventListener("mouseover", () => {
      if(value.item(5).style.display === "none" || !value.item(5).style.display) {
        value.item(5).style.display = "block";
      } else {
        value.item(5).style.display = "none";
      }
    })
    sat.addEventListener("mouseout", () => {
      if(value.item(5).style.display === "block") {
        value.item(5).style.display = "none";
      } else {
        value.itemm(5).style.display = "block";
      }
    })


    sun.addEventListener("mouseover", () => {
      if(value.item(6).style.display === "none" || !value.item(6).style.display) {
        value.item(6).style.display = "block";
      } else {
        value.item(6).style.display = "none";
      }
    })
    sun.addEventListener("mouseout", () => {
      if(value.item(6).style.display === "block") {
        value.item(6).style.display = "none";
      } else {
        value.itemm(6).style.display = "block";
      }
    })
