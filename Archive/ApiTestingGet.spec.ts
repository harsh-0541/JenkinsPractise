import { test, expect, request, APIRequestContext } from '@playwright/test';


let reqContext2: APIRequestContext;
test.beforeAll("before all test", async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"
    })
})


test('Get booking ids 3', async () => {

    const resp3 = await reqContext2.get("/booking");
    console.log(await resp3.json())
})

test('Get booking ids 1', async ({ request }) => {

    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");

    console.log(await resp1.json());

})

test('Get booking ids 2', async () => {
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });

    const resp2 = await reqContext.get("/booking");

    console.log(await resp2.json());


});

test('Get Booking ids 5', async ({ request }) => {
    const resp5 = await request.get("/booking/1");

    console.log(await resp5.json());


});

// with ull assertion

test('Assetion of status', async ({ request }) => {

    const response8 = await request.get('booking/1');
    expect(response8.ok()).toBeTruthy();


});

test('Assertion full responce', async ({ request }) => {
    const response9 = await request.get('/booking/1');
    console.log(await response9.json());
    expect(await response9.json()).toMatchObject(
        {
        firstname: 'Mary',
        lastname: 'Brown',
        totalprice: 454,
        depositpaid: false,
        bookingdates: { checkin: '2026-05-03', checkout: '2026-07-08' }
    })

});