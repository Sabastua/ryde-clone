import { TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/types";
const getBgVariantStyle=(variant:ButtonProps['bgVariant'])=>{
    switch(variant){
        case"secondary":
            return"bg-gray-500";
        case"danger":
            return"bg-red-500";
        case"success":
            return"bg-green-500";  
        case"outline":
            return"bg-transparent-border-neutral-300 border-[0.5px]";
            default:
                return'bg-[#0286ff]' ;   

    }
}

const CustomButton=({
    onPress,
    title,
    bgVariant="primary",
    textVariant="default",
    IconLeft,
    IconRight,
    className,
     ...props
    })=>(
    <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded -full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getByVariantStyle(bgVariant)}${className}`}

    >
        {IconLeft &&<IconLeft/>}
        <Text>{title}</Text>
        {IconRight &&<IconRight/>}

    </TouchableOpacity>

)
export default  CustomButton;