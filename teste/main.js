document.addEventListener("DOMContentLoaded", function () {
    const reminders = document.querySelectorAll("textarea");

    reminders.forEach((reminder, index) => {
        const savedReminder = localStorage.getItem(`reminder${index}`);
        if (savedReminder) {
            reminder.value = savedReminder;
        }

        reminder.addEventListener("input", function () {
            localStorage.setItem(`reminder${index}`, reminder.value);
        });

        reminder.addEventListener("click", function () {
            const colors = ["reminder-blue", "reminder-pink", "reminder-green"];
            for (const color of colors) {
                reminder.classList.remove(color);
            }
            const selectedColor = colors[Math.floor(Math.random() * colors.length)];
            reminder.classList.add(selectedColor);
        });

        const doneButton = document.createElement("button");
        doneButton.innerHTML = " ✔️";
        doneButton.addEventListener("click", function () {
            if (reminder.classList.contains("done")) {
                reminder.classList.remove("done");
            } else {
                reminder.classList.add("done");
            }
        });

        reminder.parentNode.appendChild(doneButton);
    });

    const obsButtons = document.querySelectorAll(".obs-button");

    obsButtons.forEach((button) => {
        button.addEventListener("click", function () {
            openObsPopup(button);
        });
    });

    function openObsPopup(obsButton) {
        const popup = document.querySelector('.popup');
        popup.style.display = 'block';
    }

    const addEventButton = document.getElementById("addEventButton");

    addEventButton.addEventListener("click", function () {
        const eventName = document.getElementById("eventName").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventCategory = document.getElementById("eventCategory").value;
        const eventObservation = document.getElementById("eventObservation").value;

        if (!eventName || !eventDate || !eventCategory) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const event = {
            nome: eventName,
            data: eventDate,
            categoria: eventCategory,
            observacao: eventObservation,
            concluido: false
        };

        document.getElementById("eventName").value = "";
        document.getElementById("eventDate").value = "";
        document.getElementById("eventCategory").value = "blue";
        document.getElementById("eventObservation").value = "";

        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
    });

    const fontSizeInput = document.getElementById('fontSize');
    const fontColorSelect = document.getElementById('fontColor');
    const eventObservation = document.getElementById('eventObservation');

    fontSizeInput.addEventListener('change', () => {
        const newSize = fontSizeInput.value + 'px';
        eventObservation.style.fontSize = newSize;
    });

    fontColorSelect.addEventListener('change', () => {
        const newColor = fontColorSelect.value;
        eventObservation.style.color = newColor;
    });
});






