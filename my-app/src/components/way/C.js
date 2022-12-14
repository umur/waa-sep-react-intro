import { LangContext } from "App";
import React, { useContext } from "react";

export default function C (props){

  const lang = useContext(LangContext)

  return(
    <div>
      C component: {lang.lang}
    </div>
  )
}