import { useState } from "react";

export default function ColorPicker(){
    
    const [color, setColor] = useState("");
    
    function handleColorChange(e){
        setColor(e.target.value);
    }

    return(
    <div className="color_picker_container">
        <h1>Color Picker</h1>
        <div className="color_display" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label htmlFor="color">Select color :</label>
        <input type="color" value={color} id="color" onChange={handleColorChange} aria-orientation="horizontal"/>
    </div>
    );
}