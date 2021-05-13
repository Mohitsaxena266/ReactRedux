import React from 'react';
import {View, Text, Image, Button, SafeAreaView} from 'react-native';
const Home = (props) => {
  console.log('props HOME ', props);
  return (
    <SafeAreaView>
      <Text>This is a Home comtainer</Text>
      <Text>{props.data.length}</Text>
      <Image
        style={{height: 200, width: 200, margin: 5}}
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/T49kxT-ZhzKjyWWWkVYiOIyAOv4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11249379/jbareham_171101_2099_A_0088_02.jpg',
        }}
      />

      <Button
        title="Add to cart"
        //
        onPress={() =>
          props.addToCartHandler({price: 100000, name: 'iPhone 11'})
        }
      />
    </SafeAreaView>
  );
};
export default Home;
