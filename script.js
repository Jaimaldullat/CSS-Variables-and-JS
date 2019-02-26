(function() {
    const controls = document.querySelectorAll(".controls input");

    function updateDOM(e) {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
        console.log(`${this.value}`);
    }

    controls.forEach(input => input.addEventListener("input", updateDOM));
}());