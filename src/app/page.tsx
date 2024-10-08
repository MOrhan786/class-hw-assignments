// Today's Class Homework

// 1. Create a simple website with 4 pages: Home, About, Contact, and Services.

// 2. Link every page from the main (Home) page.

// 3. Create one nested page.

// 4. Create a specific folder for the CSS module.

import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    
    <div >
      <nav>
      <h1  >My Home Page</h1>
  
      <ul  >
        <li   >
          <Link href="/">Home Page</Link>

        </li>

        <li>
          <Link href="/about">About us</Link>
        </li>

        <li>
          <Link href="/contact">Contact us</Link>
        </li>

        {/* Here we used Target tag ( which is open in next tab)*/}

        <li>
          <Link href="/services" target="_blank">
            Services
          </Link>
        </li>

        <li>
          <Link href="/skills">Skills Page</Link>
        </li>

        {/* Here we create nested page */}

        <li>
          <Link href="/services/services-nested">Services Nested Page</Link>

        </li>

        
    
      </ul>
      </nav>
     
  
    </div>
  );
}
export default HomePage;
