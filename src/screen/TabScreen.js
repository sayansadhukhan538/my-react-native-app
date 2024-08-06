import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Skeleton, Tab, TabView } from "@rneui/themed";
import plans from "../data/Data";
import RenderTodos from "./RenderTodos";

export default function TabScreen() {
  const [index, setIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1234);
    console.log("switching tab", index);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <View style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#fff",
        }}
        variant="primary"
      >
        <Tab.Item title="All" />
        <Tab.Item title="Pending" />
        <Tab.Item title="Completed" />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{ backgroundColor: "lightblue", width: screenWidth }}
        >
          {isLoading ? (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                paddingTop: 20,
              }}
            >
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
            </View>
          ) : (
            <FlatList
              data={plans}
              renderItem={({ item, index }) => (
                <RenderTodos item={item} index={index} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "lightblue", width: screenWidth }}
        >
          {isLoading ? (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                paddingTop: 20,
              }}
            >
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
            </View>
          ) : (
            <FlatList
              data={plans}
              renderItem={({ item, index }) => (
                <RenderTodos item={item} index={index} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "lightblue", width: screenWidth }}
        >
          {isLoading ? (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                paddingTop: 20,
              }}
            >
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
              <Skeleton animation="pulse" width={400} height={200} />
              <Skeleton
                // LinearGradientComponent={LinearGradient}
                animation="wave"
                width={400}
                height={200}
              />
            </View>
          ) : (
            <FlatList
              data={plans}
              renderItem={({ item, index }) => (
                <RenderTodos item={item} index={index} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </TabView.Item>
      </TabView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
