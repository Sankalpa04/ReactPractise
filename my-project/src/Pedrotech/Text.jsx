import React from 'react'
import { useState, useEffect } from 'react';


const Text = () => {
      const [text, setText] = useState("");

      useEffect(()=>{
        console.log("Component Mounted");
    
        return()=>{
          console.log("Component Unmounted");
        }
      },[])
      return (
        <div>
          <div >
              <input 
                onChange={(e)=>{
                  setText(e.target.value)
                }}
              />
          </div>
          <div>
            {text}
          </div>
        </div>
      )
}

export default Text