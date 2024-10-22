import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef } from "react";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            {/* Skip button */}
            <TouchableOpacity
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            {/* Swiper component */}
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-black" />}
            >
                {/* Add your slides here */}
                <View className="flex-1 items-center justify-center bg-red-500">
                    <Text>Slide 1</Text>
                </View>
                <View className="flex-1 items-center justify-center bg-green-500">
                    <Text>Slide 2</Text>
                </View>
                <View className="flex-1 items-center justify-center bg-blue-500">
                    <Text>Slide 3</Text>
                </View>
            </Swiper>
        </SafeAreaView>
    );
};

export default Onboarding;
