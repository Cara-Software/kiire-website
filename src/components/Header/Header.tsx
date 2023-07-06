import { component$, useStyles$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import styles from "./Header.css?inline"
import {UserTab} from "./UserTab"
export default component$(() => {
    useStyles$(styles)
    const nav = useNavigate()
    return (
        <div class="HeaderWrapper">
            <div class="HeaderContainer ">
                <h2>kiire</h2>
                <nav>
                    <a  onClick$={() => nav("/projects")}>Projekte</a>
                    <a onClick$={() => nav("/contakt")}>Kontaktieren</a>
                    <a  href="https://github.com/kiire-development" target="_blank">GitHub</a>
                </nav>
            </div>
            <UserTab />
        </div>
    )
})