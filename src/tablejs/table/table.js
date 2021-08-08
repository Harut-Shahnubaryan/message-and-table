import React, { useState } from "react";

export default function Table() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);

    function collapse() {
        setOpen(!open);
    }
    function collapse2() {
        setOpen2(!open2)
    }

    return (
        <>
            <div className="table">
                <div className="table_header flex-space-between">
                    <ul className="flex-space-between">
                        <li className="table_header_texts mrR-10">
                            <span onClick={collapse} className={`icon-chevron-down arrow-down pointer ${open ? "open" : null}`}></span>
                        </li>
                        <li className="table_header_texts mrR-10">
                            Table Tennis
                        </li>
                        <li className="table_header_texts mrR-10">
                            (1)
                        </li>
                    </ul>
                    <div>
                        <span className="icon-table-tennis i-tennis"></span>
                    </div>
                </div>

                {/* table body events */}
                {open ?
                    <div>
                        <div className="table_main flex-space-between">
                            <ul className="flex-space-between">
                                <li className="table_main_texts">
                                    Event
                                </li>
                            </ul>
                            <ul className="flex-space-between table_main_navbar">
                                <li className="table_main_texts mrR-10 time">
                                    Time
                                </li>
                                <div className="flex-center">
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Win1
                                    </li>
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Draw
                                    </li>
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Win2
                                    </li>
                                </div>
                                <li className="table_main_texts more">
                                    More
                                </li>
                            </ul>
                        </div>


                        <div className="table_body flex-space-between pointer">
                            <ul>
                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">Kim J. H.</span>
                                </li>

                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">A. Anthony</span>
                                </li>
                            </ul>

                            <ul className="flex-space-between table_body_tablo">
                                <li className="mrR-10 time" >
                                    20:15
                                </li>
                                <div className="flex-center">
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                </div>
                                <li className=" flex-center more_block pointer">
                                    +8
                                </li>
                            </ul>

                        </div>

                    </div>
                    : null}
            </div>


            <div className="table">
                <div className="table_header flex-space-between">
                    <ul className="flex-space-between">
                        <li className="table_header_texts mrR-10">
                            <span onClick={collapse2} className={`icon-chevron-down arrow-down pointer ${open2 ? "open" : null}`}></span>
                        </li>
                        <li className="table_header_texts mrR-10">
                            Football
                        </li>
                        <li className="table_header_texts mrR-10">
                            (3)
                        </li>
                    </ul>
                    <div>
                        <span className="icon-soccer i-soccer"></span>
                    </div>
                </div>

                {/* table body events */}

                {open2 ?
                    <div>
                        <div className="table_main flex-space-between">
                            <ul className="flex-space-between">
                                <li className="table_main_texts">
                                    Event
                                </li>
                            </ul>
                            <ul className="flex-space-between table_main_navbar">
                                <li className="table_main_texts mrR-10 time">
                                    Time
                                </li>
                                <div className="flex-center">
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Win1
                                    </li>
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Draw
                                    </li>
                                    <li className="table_main_texts mrR-10 table-nav-width">
                                        Win2
                                    </li>
                                </div>
                                <li className="table_main_texts more">
                                    More
                                </li>
                            </ul>
                        </div>

                        <ul className="table_body flex-space-between pointer">
                            <li>
                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">Kim J. H.</span>
                                </li>

                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">A. Anthony</span>
                                </li>
                            </li>

                            <ul className="flex-space-between table_body_tablo">
                                <li className="mrR-10 time" >
                                    20:15
                                </li>
                                <div className="flex-center">
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                </div>
                                <li className=" flex-center more_block pointer">
                                    0
                                </li>
                            </ul>

                        </ul>
                        <div className="table_body flex-space-between pointer">
                            <ul>
                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">Kim J. H.</span>
                                </li>

                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">A. Anthony</span>
                                </li>
                            </ul>

                            <ul className="flex-space-between table_body_tablo">
                                <li className="mrR-10 time" >
                                    20:15
                                </li>
                                <div className="flex-center">
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        -
                                    </li>
                                </div>
                                <li className=" flex-center more_block pointer">
                                    +18
                                </li>
                            </ul>

                        </div>


                        <div className="table_body flex-space-between pointer">
                            <ul>
                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">Kim J. H.</span>
                                </li>

                                <li className="table_body_users">
                                    <span className="mrR-10 table_body_Count">0</span>
                                    <span className="table_body_Name">A. Anthony</span>
                                </li>
                            </ul>

                            <ul className="flex-space-between table_body_tablo">
                                <li className="mrR-10 time" >
                                    20:15
                                </li>
                                <div className="flex-center">
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        1:00
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        2:00
                                    </li>
                                    <li className="mrR-10 flex-center tablo table-nav-width">
                                        3:00
                                    </li>
                                </div>
                                <li className=" flex-center more_block pointer">
                                    3
                                </li>
                            </ul>

                        </div>

                        <div className="table_body_footer flex-center">
                            <span className="icon-chevron-down arrow-down-footer pointer"></span>
                        </div>

                    </div>
                    : null}
            </div>
        </>

    )
}