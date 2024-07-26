# staffOS

## Running

To launch, run `npm run dev`. Then, open a browser and go to [http://localhost:3000](http://localhost:3000)

## Altering Data Store

Data is pulled from the API endpoint specified in `.env`

## Notes

As stated in the write up, this is a contrived example for the sake of brevity, but some things I would consider or do differently in production are:

- **Authorization/Authentication**: This should be pretty obvious, but if building an application that alters permissions or roles, it should be gated behind auth.
- **Testing**: Unit, smoke, etc. testing as needed. Given this is a very simple example, it didn't really warrant it given the time, but testing the API request/response is handled appropriately for 404, malformed data, etc, and testing that data and state is properly maintained across routes
- **Caching**: I started to work on caching the data, but with how little there is, it wouldn't have made a noticable difference in the percieved loading. However, doing some sort of local caching with a considered data expiration would be a good idea to consider.
