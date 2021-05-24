import html from "html-literal";

export default st => html`
  <h3>
    Weather in ${st.weather.name} ${kelvinToFahrenheit(st.data.weather.temp)}F,
    feels like ${kelvinToFahrenheit(st.data.weather.feelsLike)}F
  </h3>
  <section id="jumbotron">
    <h2>Savvy Coders Jan. 2020 Cohort</h2>
    <a href="">"Call to Action" "Button"</a>
  </section>
`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
