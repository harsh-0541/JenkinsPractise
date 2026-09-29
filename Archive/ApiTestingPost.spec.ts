import { test, expect } from '@playwright/test';


test('Checking Post command', async ({ request }) => {

    const response = await request.post("/booking", {
        data: {

            "firstname": "Harsh",
            "lastname": "Vardhan",
            "totalprice": 999,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-09-26",
                "checkout": "2026-10-04"
            },
            "additionalneeds": "Breakfast"

        }

    })
    console.log(await response.json());

    expect(response.json()).toMatchObject({
        data: {

            "firstname": "Harsh",
            "lastname": "Vardhan",
            "totalprice": 999,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-09-26",
                "checkout": "2026-10-04"
            },
            "additionalneeds": "Breakfast"

        }
        

    })
});