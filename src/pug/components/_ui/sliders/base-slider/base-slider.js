import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliders = document.querySelectorAll(".base-slider");

if (sliders.length) {
	sliders.forEach((slider) => {
		const pagination = document.querySelector(
			".base-slider + .swiper-wrapper + .swiper-pagination",
		);
		const btnNext = slider
			.closest(".base-section")
			.querySelector(".swiper-button-next");
		const btnPrev = slider
			.closest(".base-section")
			.querySelector(".swiper-button-prev");

		const isProductCardSlider = slider.classList.contains(
			"product-card-slider",
		);

		const isAutoFillSlider = slider.classList.contains("auto-fill-slider");

		const isEventsPreviewSlider = slider.classList.contains(
			"events-preview-slider",
		);

		const isCollectionPreviewSlider =
			slider.classList.contains("сollections-slider");

		const breakpoints = isProductCardSlider
			? {
					375: {
						slidesPerView: 2,
					},

					768: {
						slidesPerView: 3,
					},

					1024: {
						slidesPerView: 4,
					},
			  }
			: isCollectionPreviewSlider
			? {
					720: {
						slidesPerView: 2,
					},
			  }
			: isEventsPreviewSlider
			? {
					375: {
						slidesPerView: 2,
					},
			  }
			: !isAutoFillSlider
			? {
					768: {
						slidesPerView: 2,
					},
			  }
			: null;
		const spaceBetween = isAutoFillSlider ? 2 : 2;

		const slidesPerView = isProductCardSlider
			? 2
			: isEventsPreviewSlider
			? 2
			: isAutoFillSlider
			? "auto"
			: 1;

		new Swiper(slider, {
			modules: [Navigation, Pagination],
			slidesPerView,

			spaceBetween,

			navigation: {
				nextEl: btnNext ? btnNext : null,
				prevEl: btnPrev ? btnPrev : null,
			},

			pagination: {
				el: pagination ? pagination : null,
				clickable: true,
			},

			breakpoints,
		});
	});
}
