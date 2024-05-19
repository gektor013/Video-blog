import { SingleVideo } from "@/components/single-video";
import useActions from "@/hooks/useActions";
import { useAppSelector } from "@/store";
import { SliderData } from "@/types/data";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, View, ViewToken } from "react-native";
import { styles } from "./style";

type onViewable = {
  viewableItems: ViewToken<SliderData>[];
  changed: ViewToken<SliderData>[];
};

export const Feed = () => {
  const { clearVideoData, setVideoData } = useActions();
  const { video: videoData, feedVideos } = useAppSelector((state) => state.video_data);

  const [videoPlayingId, setVideoPlayingId] = useState(feedVideos[0].id);

  const onViewableItemsChanged = ({ viewableItems }: onViewable) => {
    if (viewableItems.length > 0 && viewableItems[0].isViewable) {
      setVideoPlayingId(viewableItems[0].item.id);
      setVideoData(viewableItems[0].item);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <FlatList
          data={feedVideos}
          renderItem={({ item }) => (
            <SingleVideo
              videoData={item as SliderData}
              activeVideoId={videoPlayingId}
              resetVideoData={clearVideoData}
              casheVideoData={videoData}
            />
          )}
          pagingEnabled
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          keyExtractor={(item) => item.id}
          decelerationRate={"fast"}
        />
      </View>
    </>
  );
};
