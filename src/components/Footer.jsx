import React from "react";

function Footer(){
    return(
        <div>
            <ul className="sm:flex justify-center">
                <li className="p-1 text-lg"><a href="#">About</a></li>
                <li className="p-1 text-lg"><a href="#">Experience</a></li>
                <li className="p-1 text-lg"><a href="#">Projects</a></li>
                <li className="p-1 text-lg"><a href="#">Contact</a></li>
            </ul>
            <p className="text-center my-2 p-2 text-slate-700">Copyright © 2023 Athul Bhandary. All Rights Reserved.</p>
        </div>
    )
}

export default Footer