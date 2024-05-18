import SecondaryBanner from "@/assets/images/secondaryBanner/book_cover.png";

import ArrowRightIcon from "@/assets/images/icons/arrow-right.svg";
import LockIcon from "@/assets/images/icons/lock.svg";
import { DEFAULT_COLORS } from "@/constants/Colors";
import { FONTS } from "@/constants/fonts";
import { Home } from "@/screens/main";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

type Slider = {
  id: number;
  img: typeof SecondaryBanner;
  title: string;
  isCommingSoon: boolean;
  isCommingTitileDate?: string;
  isCommingTitile?: string;
};

const DECONDARy_SLIDER: Slider[] = [
  {
    id: 1,
    img: SecondaryBanner,
    title: "Wolfstate chronicles: Alaska, Texas",
    isCommingSoon: false,
  },
  {
    id: 2,
    img: SecondaryBanner,
    title: "Wolfstate chronicles: Alaska, Texas",
    isCommingSoon: true,
    isCommingTitile: "Beautiful Revenge",
    isCommingTitileDate: "Coming July 2",
  },
  {
    id: 3,
    img: SecondaryBanner,
    title: "Wolfstate chronicles: Alaska, Texas",
    isCommingSoon: true,
    isCommingTitile: "Sin De Rella",
    isCommingTitileDate: "Coming July 2",
  },
];

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
      {/* <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      > */}
      {/* <View style={{ gap: 44, paddingBottom: 25 }}>
          <MainSlider />
          <ContinueWidget />
          <SecondarySlider />
          <SecondarySlider />
        </View> */}
      {/* </ScrollView> */}
    </>
  );
}

const ContinueWidget = () => {
  return (
    <View style={{ gap: 16 }}>
      <Text
        style={{
          fontFamily: FONTS.NunitoBold700,
          color: DEFAULT_COLORS.white,
          fontSize: 20,
          lineHeight: 24,
        }}
      >
        Continue Watching
      </Text>

      <View
        style={{
          paddingLeft: 6,
          paddingVertical: 6,
          paddingRight: 16,
          backgroundColor: DEFAULT_COLORS.blue,
          borderRadius: 12,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ gap: 12, flexDirection: "row" }}>
          <View style={{ aspectRatio: 44 / 56, maxHeight: 44 }}>
            <Image
              source={SecondaryBanner}
              style={{
                borderRadius: 8,
                aspectRatio: 44 / 56,
                width: "100%",
                height: undefined,
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONTS.NunitoBold700,
                fontSize: 16,
                lineHeight: 20,
                color: DEFAULT_COLORS.white,
              }}
            >
              Boss With Benefits
            </Text>
            <Text
              style={{
                fontFamily: FONTS.NunitoRegular400,
                fontSize: 14,
                lineHeight: 18,
                color: DEFAULT_COLORS.secondaryGray,
              }}
            >
              Kelly Nite
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondarySlider = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ gap: 16 }}>
      <Text
        style={{
          fontFamily: FONTS.NunitoBold700,
          color: DEFAULT_COLORS.white,
          fontSize: 20,
          lineHeight: 24,
        }}
      >
        Trending Now
      </Text>

      <ScrollView
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        style={{ gap: 12 }}
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
          {DECONDARy_SLIDER.map((slide) => (
            <View
              key={slide.id}
              style={{
                width: width / 3,
                gap: 8,
              }}
            >
              <View
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  source={slide.img}
                  blurRadius={slide.isCommingSoon ? 10 : 0}
                  style={{
                    aspectRatio: 120 / 150,
                    width: "100%",
                    height: undefined,
                  }}
                />
                {slide.isCommingSoon && (
                  <View
                    style={{
                      position: "absolute",
                      top: 60,
                      left: 45,
                      borderRadius: 100,
                      backgroundColor: "#FFFFFF52",
                      // opacity: 0.3,
                      padding: 10,
                    }}
                  >
                    <LockIcon />
                  </View>
                )}
              </View>

              <View style={{ paddingRight: "20%" }}>
                {slide.isCommingSoon && (
                  <Text
                    style={{
                      color: DEFAULT_COLORS.electricBlue,
                      fontFamily: FONTS.NunitoExtraBold800,
                      textTransform: "uppercase",
                      fontSize: 11,
                      lineHeight: 14,
                    }}
                  >
                    {slide.isCommingTitileDate}
                  </Text>
                )}
                <Text
                  style={{
                    fontFamily: FONTS.NunitoSemiBold600,
                    fontSize: 14,
                    lineHeight: 17,
                    color: DEFAULT_COLORS.white,
                  }}
                >
                  {slide.isCommingSoon ? slide.isCommingTitile : slide.title}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: 16,
  },
});
