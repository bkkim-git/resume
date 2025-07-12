document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".ex,.eduBox,.q,.skills-row");

    function revealOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            console.log(rect.top);
            if (rect.top < window.innerHeight * 0.6) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");

    function checkScroll() {
        // 전체 페이지 높이
        const pageHeight = document.documentElement.scrollHeight;
        // 현재 스크롤된 위치 + 보이는 화면 높이
        const scrolledHeight = window.scrollY + window.innerHeight;

        if (scrolledHeight >= pageHeight - 20) {
            footer.style.zIndex = "10";
        } else {
            footer.style.zIndex = "-1";
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // 페이지 로드 시 한 번 실행
});


