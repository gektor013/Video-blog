import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CrossIcon from "@/assets/images/icons/cross.svg";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "../style/style";

interface Props {
  title: string;
  onPlay: () => void;
}

export const ControllButtons = ({ onPlay, title }: Props) => {
  return (
    <Pressable onPress={onPlay} style={style.flex1}>
      <View style={style.flex1}>
        <SafeAreaView style={style.flex1}>
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0.9)",
              "rgba(0, 0, 0, .8)",
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, 0)",
            ]}
            locations={[0.4, 0.6, 0.8, 1]}
            style={style.topGradient}
          />
          <Pressable
            pointerEvents="box-none"
            onPress={() => {
              console.log("PRESSED");

              // resetVideoData();
              // router.replace("/");
            }}
            style={style.labelVideoContainer}
          >
            <View style={style.label}>
              <CrossIcon style={style.icon} />
              <Text style={style.title}>{title}</Text>
            </View>
          </Pressable>

          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, .8)",
              "rgba(0, 0, 0, 0.9)",
            ]}
            locations={[0.4, 0.6, 0.8, 1]}
            style={style.bottomGradient}
          />
        </SafeAreaView>
      </View>
    </Pressable>
  );
};
