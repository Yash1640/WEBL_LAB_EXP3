function toggleBio() {
        let bioText = document.getElementById("bio-text");
        let btn = document.querySelector(".btn-toggle");
        if (bioText.dataset.toggled === "true") {
            bioText.textContent = "I am a highly motivated and detail-oriented individual with a strong passion for software engineering.";
            btn.textContent = "Read More";
            bioText.dataset.toggled = "false";
        } else {
            bioText.textContent = "I am eager to learn new technologies and apply them to real-world problems. I am also a team player and enjoy collaborating with others to achieve a common goal.";
            btn.textContent = "Go Back";
            bioText.dataset.toggled = "true";
        }
    }

    function addSkill() {
        let val = document.getElementById("skill-input").value;
        if (val !== "") {
            let li = document.createElement("li");
            li.textContent = val;
            document.getElementById("list").appendChild(li);
            document.getElementById("skill-input").value = "";
        }
    }

    function removeSkill() {
        let list = document.getElementById("list");
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    }

    function changeBg(color) {
        document.body.style.background = color;
    }