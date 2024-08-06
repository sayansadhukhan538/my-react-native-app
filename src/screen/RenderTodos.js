import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AirbnbRating, Button, Card, Icon } from "@rneui/themed";

export default function RenderTodos({ item, index }) {
  return (
    <>
      <ScrollView>
        <View>
          <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: item.image }} />
            <Text>{item?.info?.substring(0, 123)}</Text>
            <View style={{ paddingBottom: 10 }}>
              <AirbnbRating
                isDisabled={true}
                count={10}
                defaultRating={item.price[0]}
                size={15}
                reviews={false}
                selectedColor={item.price[0] > 5 ? "green" : "red"}
              />
            </View>
            <Card.Divider />
            <Button
              icon={
                <Icon
                  name="money"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 12,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title={item.price}
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
