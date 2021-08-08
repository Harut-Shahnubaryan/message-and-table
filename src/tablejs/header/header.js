import React from "react"

export default function Header() {
    return (
        <div className="header flex-space-between">
            <div><p className="header_text">Live Betting</p></div>
            <div className="flex-space-between header_container" >
                <div className="header_betting flex-center pointer selected">
                    <span>Now</span>
                </div>
                <div className="header_betting flex-center pointer">
                      <span>Coming Up</span>
                </div>
            </div>
        </div>
    )
}