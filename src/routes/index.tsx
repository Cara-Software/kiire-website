import { $, component$, useOnWindow, useStyles$, useVisibleTask$, } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from "./style.css?inline"


export default component$(() => {
  useOnWindow("mousemove", $((event) => {
    const cursor = document.getElementById("cursor") as HTMLElement

    cursor.style.transform = `translate(${(event as MouseEvent).x - 10}px, ${(event as MouseEvent).y - 10}px)`;
  }))

  useVisibleTask$(() => {
    const a = document.querySelectorAll("a")
    const text = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6") 
    const cursor = document.getElementById("cursor") as HTMLElement
    a.forEach((a) => {
      a.addEventListener("mousemove", () => {
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "solid 2px #7E7F83"
        cursor.style.width = "30px"
        cursor.style.height = "30px"
        cursor.style.transition = "all 0.3s ease"
      })
      a.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "#7E7F83"
        cursor.style.border = "none"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.transition = "all 0.1s ease"
      })
    })

    text.forEach((text) => {
      text.addEventListener("mousemove", () => {
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "solid 2px #7E7F83"
      })
      text.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "#7E7F83"
        cursor.style.border = "none"
      })
    })
  })
 
  useStyles$(styles)
  return (
    <div  class="container">
      {/* Mause Cursor */}
      <div style={{}} class="cursor" id='cursor'>

      </div>
      {/* first section */}
      <div class="first-section">
        <h2>Hey ✌️, wir sind <a target='_blanc' href="https://github.com/kiire-development">kiire</a>.</h2>
        <p>kiire.xyz</p>

        {/* Scroll Down SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z"
            fill="currentColor"
          />
          <path
            d="M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z"
            fill="currentColor"
          />
        </svg>

        
      </div>

      {/* k erklärt */}
      <div class="second-section">
        <div class="k">
          k
          <p>kiire</p>
        </div>
        <p class="description">Das "k" in unserem Namen steht für kretiv. Wir haben super viele und super gute Ideen, alle zusammen ergeben dann ein Meisterwerk aus Code.</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'kiire',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
