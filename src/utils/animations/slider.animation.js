import gsap from "gsap";
import { HeaderBig } from "./../../components/PaginationComponent/Pagination.component";
import {
    ContentBox,
    Photo,
} from "./../../components/PlannerSlider/Slider.component";

const defaultVars = {
    duration: 0.3,
    ease: "Power3.inOut",
};

export const animateSlider = (ref, slideCallback, allowChangeCb) => {
    const container = ref?.current;
    const contentBox = container.querySelector(ContentBox);
    const photoElement = container.querySelector(Photo);
    const slideNumber = container.querySelector(HeaderBig);

    const tl = gsap.timeline({
        defaults: defaultVars,
    });

    tl.addLabel("start")
        .to(
            photoElement,
            {
                translateX: "-=200px",
                autoAlpha: 0,
            },
            "start"
        )
        .to(
            contentBox,
            {
                translateX: "100px",
                autoAlpha: 0,
            },
            "start"
        )
        .to(slideNumber, { autoAlpha: 0 })
        .call(slideCallback)
        .to(slideNumber, { autoAlpha: 1 })
        .addLabel("back")
        .to(photoElement, { translateX: "+=200px", autoAlpha: 1 }, "back")
        .to(contentBox, { translateX: "0", autoAlpha: 1 }, "back")
        .call(allowChangeCb);
};
