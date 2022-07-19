# Trip Page App

This is a basic version of a trip page view. I've tried to keep things simple by using `create-react-app` and avoiding any additional `babel` or `webpack` config. I don't think the added complexity would be useful for this demo.

There are some are some parts which I have decided to omit in the interest of time.
- The loading and error pages are missing. I decided to just focus on the main page.
- There are no tests. Testing frontend components is tricky. Unit tests could be useful in some components (e.g. testing the time picking logic in the Route component) but ideally user journeys would be more useful. I've used [Cypress](https://www.cypress.io/) in the past to moderate success but it's hard to pick up visual problems automatically. Backend services are a lot easier to test and most of the time I'll start with tests, e.g. if I was adding a new feature to a REST API I would start with a test that I think will match an expected request.
- The page doesn't automatically refresh data. It could do this by querying the API on some interval.
- Nothing links to anywhere. Even the header links don't go anywhere, it didn't seem useful for this exercise.
- The page is somewhat reactive, decreasing the screen width causes the elements to fit the page but I haven't went all the way with it. Right now, any screen under 450px wide will have some horizontal scrolling, that's a case I'd like to fix in a production version. Likewise, if there are stops with excessively long names the styling won't be great (something that will have to be fixed if there is ever a service to a certain Welsh town).

## Assumptions

I've made some assumptions about the data recieved from the trips API.

- Either `route[].skipped` or `route[].departure.actual` is set when a stop has been visited.
- `route[].arrival.scheduled` always exists.
- The times in `route[].departure` and `route[].departure` are UTC (they look to be ISO format dates with `+00:00`) and must be converted into the stops local time.

## Usage

Run locally:
```sh
npm start
```

Now visiting `http://localhost:3000/<trip id>` will show you details about that trip.
