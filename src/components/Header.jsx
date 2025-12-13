import React from "react";

function Header({setPage}){
    return(
        <header>
            <nav> 
                <a onClick={()=> setPage("home")}><h2>Home</h2></a>
                <a onClick={()=> setPage("about")}><h2>About</h2></a>
                <a onClick={()=> setPage("projects")}><h2>Projects</h2></a>
                <a onClick={()=> setPage("contact")}><h2>Contact</h2></a>
            </nav>
        </header>

    );

}
export default Header;