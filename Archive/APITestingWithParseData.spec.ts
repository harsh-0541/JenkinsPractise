import { test, expect } from '@playwright/test';
import ApiJson from '../TestData/apidata.json';

test('Test by passing json json from post call', async ({ request }) => {
    const postresponse = await request.post("https://restful-booker.herokuapp.com/booking", {
        data: ApiJson
    })

    const response = await postresponse.json();
    expect(response.booking).toMatchObject(ApiJson)


});