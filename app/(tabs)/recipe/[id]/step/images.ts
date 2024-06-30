const ROOT_PATH = "@/assets/game/recipes/fried_rice/";
const images = [
  require(ROOT_PATH + "1_Emptygasstove.png"),
  require(ROOT_PATH + "2_medheat.png"),
  require(ROOT_PATH + "3_Gas_stove_pan_on_med_heat.png"),
  require(ROOT_PATH + "4_oil.png"),
  require(ROOT_PATH + "5_garlic.png"),
  require(ROOT_PATH + "6_green_onion.png"),
  require(ROOT_PATH + "7_after_mix.png"),
  require(ROOT_PATH + "8_reduce_flame_ to_low.png"),
  require(ROOT_PATH + "9_addchilli.png"),
  require(ROOT_PATH + "10_mix.png"),
  require(ROOT_PATH + "11_increase_to_high.png"),
  require(ROOT_PATH + "12_add_rice.png"),
  require(ROOT_PATH + "13_mix.png"),
  require(ROOT_PATH + "14_lightsoysauce.png"),
  require(ROOT_PATH + "15_darksoysauce.png"),
  require(ROOT_PATH + "16_sugar.png"),
  require(ROOT_PATH + "17_egg1.png"),
  require(ROOT_PATH + "18_mix.png"),
  require(ROOT_PATH + "19_springonion.png"),
  require(ROOT_PATH + "20_turnoffflame.png"),
];

// create a map of images to their respective step numbers
const imageMap = images.reduce((acc, img, index) => {
  acc[index + 1] = img;
  return acc;
}, {});

export default imageMap;
