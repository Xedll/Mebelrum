document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".catalog__cat").forEach((item) => {
		item.addEventListener("click", (e) => {
			e.target.classList.toggle("active")
		})
	})
})
