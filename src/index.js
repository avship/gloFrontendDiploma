const sliderBenefits = require("./modules/slider");
const sliderServices = require("./modules/sliderServices");
const modals = require("./modules/modals");
const scroller = require("./modules/scroll_top");
const timer = require("./modules/timer");
const formValid = require("./modules/form-validation");
const certificateBox = require("./modules/certifiicates");
const sendForm = require("./modules/sendForm");
const maskPhone = require("./modules/phone_mask");
const calc = require("./modules/calculator");
const reviesGetter = require("./modules/reviewsGetter");

sliderBenefits();
sliderServices();
modals();
scroller();
timer("11 july 2022", "#order_1");
timer("15 july 2022", "#order_2");
formValid();
certificateBox();
maskPhone();
sendForm();

calc();
reviesGetter();
