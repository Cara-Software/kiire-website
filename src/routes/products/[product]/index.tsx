import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProductLoader = routeLoader$(async (requestEvent) => {
  // Datenbank Daten können hier gefetcht werden
  const data = requestEvent.params.product
  console.log(data)
  if (!data) {
    requestEvent.status(404);
  }
 
  return data;
});


export default component$(() => {
    const product = useProductLoader()
    if (!product) {
        return (
            <div>
                404 nicht gefunden
            </div>
        )
    }
    return(
        <div>
            Produkt wurde geladen
            {product}
        </div>
    )
})