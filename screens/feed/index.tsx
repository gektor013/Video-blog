import { SingleVideo } from "@/components/single-video";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, View, ViewToken } from "react-native";
import { styles } from "./style";

const VIDEO_DATA = [
  {
    id: 1,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8",
  },
  {
    id: 2,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8",
  },
  {
    id: 3,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8",
  },
  {
    id: 4,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8",
  },
  {
    id: 5,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8",
  },
  {
    id: 6,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8",
  },
  {
    id: 7,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8",
  },
  {
    id: 8,
    url: "https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8",
  },
];

type onViewable = {
  viewableItems: ViewToken<{
    id: number;
    url: string;
  }>[];
  changed: ViewToken<{
    id: number;
    url: string;
  }>[];
};

export const Feed = () => {
  const [videoPlayingVideoId, setVideoPlayingVideoId] = useState(VIDEO_DATA[0].id);

  const onViewableItemsChanged = ({ viewableItems }: onViewable) => {
    if (viewableItems.length > 0 && viewableItems[0].isViewable) {
      setVideoPlayingVideoId(viewableItems[0].item.id);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <FlatList
          data={VIDEO_DATA}
          renderItem={({ item }) => (
            <SingleVideo videoData={item} activeVideoId={videoPlayingVideoId} />
          )}
          pagingEnabled
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          keyExtractor={(item: any) => item.id}
          decelerationRate={"fast"}
        />
      </View>
    </>
  );
};