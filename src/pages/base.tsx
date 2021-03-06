import React from "react"
import "./base.css"

export abstract class BasePage<Props> extends React.Component<Props> {

    set container(ref: HTMLDivElement | null) {
        if(ref) {
            window.setTimeout(() => {
                ref.style.opacity = "1";
                ref.style.transform = "unset";
            }, 50);
        }
    }
}