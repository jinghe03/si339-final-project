// Q&A
document.addEventListener("DOMContentLoaded", () => {
    const qAndAContainer = document.querySelector(".q-and-a");

    // Define the Q&A data directly in the script
    const qAndAData = [
        {
            question: "Why did you create this site?",
            answer: "As a senior at the University of Michigan, I’ve explored a wide range of restaurants on and off campus with my friends and family. I love exploring diverse cuisines, price points, and dining atmospheres, and wanted to create a page where someone can easily pinpoint a couple of trendy and on theme places to take their loved ones!"
        },
        {
            question: "What type of food do you usually review?",
            answer: "I love all types of foods, and have a couple of favorites in mind for every occasion. Whether you're looking for quick bites, fine dining, or vegan-friendly options, my reviews focus on providing options that suit different tastes and preferences."
        },
        {
            question: "How do you rate restaurants?",
            answer: "I rate restaurants based on several factors, including taste, ambiance, service, and price. Each review is tailored to highlight what stands out most about the restaurant."
        }
    ];

    // Render Q&A items dynamically
    qAndAData.forEach((item) => {
        const qItem = document.createElement("div");
        qItem.classList.add("q-item");

        const qHeader = document.createElement("div");
        qHeader.classList.add("q-header");
        qHeader.innerHTML = `
            <h3>${item.question}</h3>
            <i class="fas fa-chevron-down"></i>
        `;

        const qContent = document.createElement("div");
        qContent.classList.add("q-content");
        qContent.textContent = item.answer;

        // Add toggle functionality
        qHeader.addEventListener("click", () => {
            qHeader.classList.toggle("active");
            qContent.style.display = 
                qContent.style.display === "block" ? "none" : "block";

            // Rotate the icon
            const icon = qHeader.querySelector("i");
            icon.style.transform = icon.style.transform === "rotate(180deg)" 
                ? "rotate(0deg)" 
                : "rotate(180deg)";
        });

        // Append header and content to the Q&A item
        qItem.appendChild(qHeader);
        qItem.appendChild(qContent);

        // Add Q&A item to the container
        qAndAContainer.appendChild(qItem);
    });
});