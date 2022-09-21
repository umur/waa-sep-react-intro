
import * as React from "react";
import {render} from "react-dom";
import Axios from "axios"
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;

export interface TodoInterface {
    id: string
    userId: string
    title: string
    completed: boolean
}

export default function Todo(props: any) {

return (
    <div>
        {
            <ul>
                <li >Title: {props?.props.title}</li>
                <li >Completed: {props?.props.completed? "Yes": "No"}</li>
            </ul>
        }


    </div>
)


}
