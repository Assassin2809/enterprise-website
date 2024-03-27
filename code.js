var arrows = [];

function searchRoom() {
    var roomNumber = document.getElementById("room-number").value;
    clearHighlight();
    
    if (roomNumber === "101") {
        highlightRoom(220, 1020);
    } else if (roomNumber === "102") {
        highlightRoom(220, 1073);
    } else if (roomNumber === "103") {
        highlightRoom(240, 1073);
    } else if(roomNumber === "104") {
        highlightRoom(280,1073);
    } else if(roomNumber === "105") {
        highlightRoom(280,1020)
    } else if(roomNumber === "212") {
        highlightRoom(220,940)
    } else if(roomNumber === "213") {
        highlightRoom(280,940)
    } else if(roomNumber === "214") {
        highlightRoom(280,880)
    } else if(roomNumber === "210") {
        highlightRoom(218,820)
    } else if(roomNumber === "209") {
        highlightRoom(194,860)
    } else if(roomNumber === "208") {
        highlightRoom(170,860)
    } else if(roomNumber === "207") {
        highlightRoom(140,860)
    } else if(roomNumber === "206") {
        highlightRoom(140,780)
    } else if(roomNumber === "205") {
        highlightRoom(180,780)
    } else if(roomNumber === "203") {
        highlightRoom(240,780)
    } else if(roomNumber === "COLA" || roomNumber === "cola") {
        highlightRoom(480,260)
    } else if(roomNumber === "326") {
        highlightRoom(216, 677);
    } else if(roomNumber === "325") {
        highlightRoom(216, 720);
    } else if(roomNumber === "324") {
        highlightRoom(180, 720);
    } else if(roomNumber === "323") {
        highlightRoom(135, 720);
    } else if(roomNumber === "322") {
        highlightRoom(135, 680);
    } else if(roomNumber === "321") {
        highlightRoom(175, 645);
    } else if(roomNumber === "321A" || roomNumber === "321a") {
        highlightRoom(135, 645);
    } else if(roomNumber === "320") {
        highlightRoom(195, 645);
    } else if(roomNumber === "319") {
        highlightRoom(225, 645);
    } else if(roomNumber === "318") {
        highlightRoom(280, 580);
    } else if(roomNumber === "317") {
        highlightRoom(280, 540);
    } else if(roomNumber === "316") {
        highlightRoom(280, 500);
    } else if(roomNumber === "315") {
        highlightRoom(309, 500);
    } else if(roomNumber === "314") {
        highlightRoom(329, 500);
    } else if(roomNumber === "313") {
        highlightRoom(349, 500);
    } else if(roomNumber === "312") {
        highlightRoom(369, 500);
    } else if(roomNumber === "311") {
        highlightRoom(420, 480);
    } else if(roomNumber === "310") {
        highlightRoom(500, 430);
    } else if(roomNumber === "309") {
        highlightRoom(530, 430);
    } else if(roomNumber === "308") {
        highlightRoom(545, 450);
    } else if(roomNumber === "307") {
        highlightRoom(545, 480);
    } else if(roomNumber === "306") {
        highlightRoom(545, 500);
    } else if(roomNumber === "305") {
        highlightRoom(420, 640);
    } else if(roomNumber === "304") {
        highlightRoom(400, 640);
    } else if(roomNumber === "303") {
        highlightRoom(350, 670);
    } else if(roomNumber === "302") {
        highlightRoom(350, 710);
    } else if(roomNumber === "301") {
        highlightRoom(295, 710);
    } else if(roomNumber === "3T1" || roomNumber === "3t1") {
        highlightRoom(250, 400);
    } else if(roomNumber === "3T2" || roomNumber === "3t2") {
        highlightRoom(280, 400);
    } else if(roomNumber === "3T3" || roomNumber === "3t3") {
        highlightRoom(320, 400);
    } else if(roomNumber === "3T4" || roomNumber === "3t4") {
        highlightRoom(320, 380);
    }else if(roomNumber === "3T5" || roomNumber === "3t5") {
        highlightRoom(270, 370);
    }else if(roomNumber === "401") {
        highlightRoom(143, 555);
    } else if(roomNumber === "402") {
        highlightRoom(160, 555);
    } else if(roomNumber === "403") {
        highlightRoom(200, 536);
    } else if(roomNumber === "404") {
        highlightRoom(200, 480);
    } else if(roomNumber === "405") {
        highlightRoom(200, 460);
    } else if(roomNumber === "406") {
        highlightRoom(90, 420);
    } else if(roomNumber === "407") {
        highlightRoom(70, 420);
    } else if(roomNumber === "408") {
        highlightRoom(70, 490);
    } else if(roomNumber === "409") {
        highlightRoom(70, 520);
    } else if(roomNumber === "410") {
        highlightRoom(70, 560);
        
    }else if(roomNumber === "201") {
        highlightRoom(315, 850);
        
    }else if(roomNumber === "202") {
        highlightRoom(355, 850);
        
    } else if(roomNumber === "ART1" || roomNumber === "art1") {
        highlightRoom(40, 315);
    } else if(roomNumber === "ART2" || roomNumber === "art2") {
        highlightRoom(60, 315);
    } else if(roomNumber === "ART3" || roomNumber === "art3") {
        highlightRoom(95, 315);
    } else if(roomNumber === "ART4" || roomNumber === "art4") {
        highlightRoom(120, 315);
    } else if(roomNumber === "MPC" || roomNumber === "mpc") {
        highlightRoom(650, 630);
    } else if(roomNumber === "Staff" || roomNumber === "staff") {
        highlightRoom(210, 400);
        highlightRoom(210, 575);
        highlightRoom(210,900);
        highlightRoom(270,1070);
        highlightRoom(350,650);
    } else { 
        alert("Room not found!");
    }
}

function clearHighlight() {
    arrows.forEach(arrow => {
        arrow.style.display = "none";
    });
    arrows = [];
}

function highlightRoom(top, left) {
    var arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.style.top = top + "px";
    arrow.style.left = left + "px";
    document.getElementById("map-container").appendChild(arrow);
    arrows.push(arrow);
}

function showFeedbackPopup() {
    document.getElementById("feedback-popup").style.display = "block";
}

function hideFeedbackPopup() {
    document.getElementById("feedback-popup").style.display = "none";
}

document.getElementById("cancel-feedback").addEventListener("click", hideFeedbackPopup);

document.getElementById("send-feedback").addEventListener("click", function() {
    window.open("mailto:feedbackphhs@gmail.com");
    hideFeedbackPopup();
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showFeedbackPopup, 300);
});
document.getElementById("transition-button").addEventListener("click", function() {
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("school-map").classList.add("visible");
});
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("school-map").style.display = "block";
});

function goBack() {
    document.getElementById("school-map").style.display = "none";
    document.getElementById("start-page").style.display = "flex";
}

// Function to highlight rooms based on category
function highlightCategory(category) {
    clearHighlight();
    switch (category) {
        case 'Level 4':
            highlightRoom(143, 555); // Room 401
            highlightRoom(160, 555); // Room 402
            highlightRoom(200, 536); // Room 403
            highlightRoom(200, 480); // Room 404
            highlightRoom(200, 460); // Room 405
            highlightRoom(90, 420); // Room 406
            highlightRoom(70, 420); // Room 407
            highlightRoom(70, 490); // Room 408
            highlightRoom(70, 520); // Room 409
            highlightRoom(70, 560); // Room 410
            highlightRoom(40, 315); // ART1
            highlightRoom(60, 315); // ART2
            highlightRoom(95, 315); // ART3
            highlightRoom(120, 315);            
            highlightRoom(320, 380);            
            highlightRoom(270, 370);
            

            break;
        case 'Level 3':
            highlightRoom(216, 677);
            highlightRoom(216, 720);
            highlightRoom(180, 720);
            highlightRoom(135, 720);
            highlightRoom(135, 680);
            highlightRoom(175, 645);
            highlightRoom(135, 645);
            highlightRoom(195, 645);
            highlightRoom(225, 645);
            highlightRoom(280, 580);
            highlightRoom(280, 540);
            highlightRoom(280, 500);
            highlightRoom(309, 500);
            highlightRoom(329, 500);
            highlightRoom(349, 500);
            highlightRoom(369, 500);
            highlightRoom(420, 480);
            highlightRoom(500, 430);
            highlightRoom(530, 430);
            highlightRoom(545, 450);
            highlightRoom(545, 480);
            highlightRoom(545, 500);
            highlightRoom(420, 640); // Room 305
            highlightRoom(400, 640); // Room 304
            highlightRoom(350, 670); // Room 303
            highlightRoom(350, 710); // Room 302
            highlightRoom(295, 710); // Room 301
            highlightRoom(250, 400); // 3T1
            highlightRoom(280, 400); // 3T2
            highlightRoom(320, 400); // 3T3
            highlightRoom(480, 260); // COLA

            break;
        case 'Level 2':
            highlightRoom(220, 940);
            highlightRoom(280, 940);
            highlightRoom(280, 880);
            highlightRoom(218, 820);
            highlightRoom(194, 860);
            highlightRoom(170, 860);
            highlightRoom(140, 860);
            highlightRoom(140, 780);
            highlightRoom(180, 780);
            highlightRoom(240, 780);
            break;
        case 'Level 1':
            highlightRoom(220, 1073);
            highlightRoom(240, 1073);
            highlightRoom(280, 1073);
            highlightRoom(280, 1020);
            highlightRoom(220, 1020);
            break;
        case 'Staff Rooms':
            highlightRoom(210, 400);
            highlightRoom(210, 575);
            highlightRoom(210, 900);
            highlightRoom(265,1070);
            highlightRoom(350, 650);
            highlightRoom(190, 790);
            highlightRoom(263,640);
        case 'Toilets':
            highlightRoom(350,810)    
            highlightRoom(370,630)
            highlightRoom(410,380)
            highlightRoom(460,380)
        case 'All':
            break; 
        default:
            // Do nothing for 'All' category
            break;
    }
}

