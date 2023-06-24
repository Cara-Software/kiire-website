import { component$, Slot, useOnWindow, useVisibleTask$, $, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import Header from '~/components/Header/Header';
import Footer from "~/components/Footer/Footer"

import styles from "./layout.css?inline"
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  useStyles$(styles)
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

  return (
    <>
      {/* Mause Cursor */}
      <div class="cursor" id='cursor'>

      </div>
      <Header />
      <Slot />
      <Footer />
    </>
  )
});
