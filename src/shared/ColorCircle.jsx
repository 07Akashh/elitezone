const ColorCircle = ({ color, selected, onSelect }) => {

    const colorValue = getColorValue(color);

    return (
        <div
            className={`h-5 w-5 rounded-full cursor-pointer border-2 ${selected ? 'border-black' : ''}`}
            style={{ backgroundColor: colorValue }}
            onClick={() => onSelect(color)}
        />
    );
};

export default ColorCircle;



const getColorValue = (colorName) => {
    switch (colorName) {
        case "Shiny Green":
            return "#66FF66";
        case "Cobalt Blue":
            return "#0047AB";
        case "Deep Black":
            return "#000000";
        case "Platinum Grey":
            return "#E5E4E2";
        case "Snow White":
            return "#FFFAFA";
        case "Emerald Green":
            return "#50C878";
        case "Wine Red":
            return "#722F37";
        case "Mint Green":
            return "#98FF98";
        case "Butterfly White":
            return "#F8F8FF";
        case "Sky Blue":
            return "#87CEEB";
        case "Charcoal":
            return "#36454F";
        case "Navy Blue":
            return "#000080";
        case "White":
            return "#FFFFFF";
        case "Ivory":
            return "#FFFFF0";
        default:
            return "#FFFFFF";
    }
};
