import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
export default component$(() => {
    const nav = useNavigate()
    return (
        <div class="container">
            <h2>kiire</h2>
            <nav>
                <a onClick$={() => nav("/projects")}>Projekte</a>
                <a onClick$={() => nav("/contakt")}></a>
            </nav>
        </div>
    )
})